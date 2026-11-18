import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contact, profile } from "@/data/portfolio";
import { buildMailto, contactSchema, type ContactInput } from "@/lib/contact";
import { cn } from "@/lib/utils";
import { fadeUp, Reveal, stagger } from "./Reveal";
import { Section } from "./Section";

const cards = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, "")}`, icon: Phone },
  { label: "Location", value: profile.address, href: "", icon: MapPin },
  { label: "GitHub", value: "github.com/igismail", href: profile.github, icon: Github },
  { label: "LinkedIn", value: "in/mohammed-ismail", href: profile.linkedin, icon: Linkedin },
];

type Errors = Partial<Record<keyof ContactInput, string>>;
const empty: ContactInput = { name: "", email: "", message: "" };

const fieldClass =
  "h-12 rounded-xl border-glass-border bg-background/60 px-4 text-base focus-visible:ring-2 focus-visible:ring-ring";

export function Contact() {
  const [values, setValues] = useState<ContactInput>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);

  const update = (key: keyof ContactInput) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(values);
    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof ContactInput;
        next[key] ??= issue.message;
      }
      setErrors(next);
      toast.error("Please check the highlighted fields.");
      return;
    }
    setSending(true);
    window.location.href = buildMailto(result.data);
    toast.success("Thanks, your message is ready!", {
      description: `Your email app is opening with it addressed to ${profile.email}.`,
    });
    setValues(empty);
    setTimeout(() => setSending(false), 800);
  };

  const field = (key: keyof ContactInput) => ({
    id: `contact-${key}`,
    name: key,
    value: values[key],
    onChange: update(key),
    "aria-invalid": errors[key] ? true : undefined,
    "aria-describedby": errors[key] ? `contact-${key}-error` : undefined,
  });

  const ErrorText = ({ k }: { k: keyof ContactInput }) =>
    errors[k] ? (
      <p id={`contact-${k}-error`} className="mt-1.5 text-sm text-destructive">
        {errors[k]}
      </p>
    ) : null;

  return (
    <Section
      id="contact"
      index="05"
      eyebrow="Contact"
      title={
        <>
          Let's build something <span className="text-gradient">great</span> together
        </>
      }
      description={contact.subheading}
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.15fr]">
        <motion.ul
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid content-start gap-3"
        >
          {cards.map(({ label, value, href, icon: Icon }) => {
            const inner = (
              <>
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-brand text-brand-foreground">
                  <Icon className="size-5" aria-hidden />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
                  <span className="block truncate font-medium">{value}</span>
                </span>
                {href && (
                  <ArrowUpRight
                    className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                    aria-hidden
                  />
                )}
              </>
            );
            const cls = "glass glow-hover group flex items-center gap-4 rounded-2xl p-4";
            return (
              <motion.li key={label} variants={fadeUp}>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer noopener"
                    className={cn(cls, "hover:-translate-y-0.5")}
                  >
                    {inner}
                  </a>
                ) : (
                  <div className={cls}>{inner}</div>
                )}
              </motion.li>
            );
          })}
        </motion.ul>

        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            noValidate
            aria-label="Contact form"
            className="glass relative overflow-hidden rounded-3xl p-6 sm:p-9"
          >
            <div className="absolute -right-24 -top-24 size-64 rounded-full bg-brand opacity-15 blur-3xl" aria-hidden />
            <div className="relative grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="contact-name" className="mb-2 block">Name</Label>
                  <Input {...field("name")} autoComplete="name" placeholder="Your name" maxLength={100} className={fieldClass} />
                  <ErrorText k="name" />
                </div>
                <div>
                  <Label htmlFor="contact-email" className="mb-2 block">Email</Label>
                  <Input {...field("email")} type="email" autoComplete="email" placeholder="you@company.com" maxLength={255} className={fieldClass} />
                  <ErrorText k="email" />
                </div>
              </div>
              <div>
                <Label htmlFor="contact-message" className="mb-2 block">Message</Label>
                <Textarea
                  {...field("message")}
                  rows={6}
                  maxLength={1000}
                  placeholder="Tell me about your project or role…"
                  className={cn(fieldClass, "h-auto min-h-36 resize-y py-3")}
                />
                <div className="flex justify-between gap-3">
                  <ErrorText k="message" />
                  <span className="ml-auto mt-1.5 font-mono text-xs text-muted-foreground">{values.message.length}/1000</span>
                </div>
              </div>
              <Button type="submit" variant="hero" size="xl" disabled={sending} className="group w-full sm:w-auto sm:justify-self-start">
                {sending ? <Loader2 className="animate-spin" aria-hidden /> : <Send className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />}
                Send Message
              </Button>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
