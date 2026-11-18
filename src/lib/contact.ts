import { z } from "zod";
import { profile } from "@/data/portfolio";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email is too long"),
  message: z
    .string()
    .trim()
    .min(10, "Message should be at least 10 characters")
    .max(1000, "Message must be under 1000 characters"),
});

export type ContactInput = z.infer<typeof contactSchema>;

/** Builds the mailto link that opens the visitor's email app with the message filled in. */
export function buildMailto({ name, email, message }: ContactInput, to = profile.email) {
  const subject = `Portfolio enquiry from ${name}`;
  const body = `${message}\n\n— ${name} (${email})`;
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
