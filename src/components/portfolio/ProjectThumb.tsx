import { Bus, Crosshair, FileText, ScanFace, Ticket } from "lucide-react";
import type { Project } from "@/data/portfolio";

function Phone({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-44 w-24 rounded-[1.4rem] border border-glass-border bg-background p-1.5 shadow-glow transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-[-3deg]">
      <div className="mx-auto mb-1.5 h-1 w-8 rounded-full bg-muted" />
      <div className="flex h-[calc(100%-0.6rem)] flex-col gap-1.5 overflow-hidden rounded-[1rem] bg-card p-2">{children}</div>
    </div>
  );
}

const Bar = ({ w }: { w: string }) => <div className="h-1.5 rounded-full bg-muted" style={{ width: w }} />;

function Ats() {
  return (
    <div className="flex items-end gap-3">
      <Phone>
        <div className="mx-auto mt-1 grid size-14 place-items-center rounded-full bg-brand p-[3px]">
          <div className="grid size-full place-items-center rounded-full bg-card">
            <span className="text-gradient font-display text-sm font-bold">87</span>
          </div>
        </div>
        <p className="text-center font-mono text-[0.45rem] uppercase tracking-wider text-muted-foreground">ATS score</p>
        <Bar w="90%" />
        <Bar w="70%" />
        <Bar w="80%" />
        <div className="mt-auto h-4 rounded-md bg-brand" />
      </Phone>
      <div className="glass mb-6 flex items-center gap-2 rounded-xl px-2.5 py-2 text-[0.6rem] font-medium">
        <FileText className="size-3.5 text-primary" aria-hidden /> resume.pdf
      </div>
    </div>
  );
}

function Face() {
  return (
    <Phone>
      <div className="relative mt-1 grid flex-1 place-items-center rounded-lg bg-muted/60">
        <ScanFace className="size-10 text-primary" strokeWidth={1.4} aria-hidden />
        {["left-1 top-1 border-l-2 border-t-2", "right-1 top-1 border-r-2 border-t-2", "bottom-1 left-1 border-b-2 border-l-2", "bottom-1 right-1 border-b-2 border-r-2"].map((c) => (
          <span key={c} className={`absolute size-3 rounded-[2px] border-brand-to ${c}`} />
        ))}
      </div>
      <p className="text-center font-mono text-[0.45rem] uppercase tracking-wider text-muted-foreground">1 face found</p>
      <div className="h-4 rounded-md bg-brand" />
    </Phone>
  );
}

function BusThumb() {
  return (
    <div className="flex items-end gap-3">
      <div className="glass mb-8 flex items-center gap-2 rounded-xl px-2.5 py-2 text-[0.6rem] font-medium">
        <Ticket className="size-3.5 text-primary" aria-hidden /> ৳ 450
      </div>
      <Phone>
        <div className="flex items-center gap-1.5">
          <Bus className="size-4 text-primary" aria-hidden />
          <Bar w="60%" />
        </div>
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-md border border-glass-border p-1.5">
            <Bar w="70%" />
            <div className="mt-1 flex justify-between">
              <Bar w="30%" />
              <span className="h-1.5 w-3 rounded-full bg-brand" />
            </div>
          </div>
        ))}
        <div className="mt-auto h-4 rounded-md bg-brand" />
      </Phone>
    </div>
  );
}

function Dome() {
  return (
    <div className="relative grid size-40 place-items-center rounded-full border border-glass-border">
      <div className="absolute inset-5 rounded-full border border-glass-border" />
      <div className="absolute inset-10 rounded-full border border-glass-border" />
      <div className="absolute inset-0 animate-radar rounded-full bg-radar" />
      <span className="absolute right-8 top-9 size-2 animate-ping rounded-full bg-brand-to" />
      <Crosshair className="relative size-8 text-primary transition-transform duration-500 group-hover:rotate-90" aria-hidden />
    </div>
  );
}

const thumbs: Record<Project["thumb"], () => React.ReactElement> = {
  ats: Ats,
  face: Face,
  bus: BusThumb,
  dome: Dome,
};

export function ProjectThumb({ type, title }: { type: Project["thumb"]; title: string }) {
  const Visual = thumbs[type];
  return (
    <div
      role="img"
      aria-label={`Illustration of ${title}`}
      className="relative grid h-56 place-items-center overflow-hidden border-b border-glass-border bg-muted/40"
    >
      <div className="absolute inset-0 bg-grid" aria-hidden />
      <div className="absolute left-1/2 top-1/2 size-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand opacity-25 blur-3xl transition-opacity duration-500 group-hover:opacity-40" aria-hidden />
      <div className="relative">
        <Visual />
      </div>
    </div>
  );
}
