import { motion } from "framer-motion";

function Card() {
  return (
    <div className="rounded-xl border border-slate-200/60 bg-white/70 p-4 shadow-sm dark:border-slate-800/60 dark:bg-slate-900/40">
      <div className="flex items-center justify-between">
        <div className="grid h-8 w-8 place-items-center rounded-md border border-slate-200/60 bg-slate-100/80 text-[10px] font-semibold text-slate-500 dark:border-slate-800/60 dark:bg-slate-800/60 dark:text-slate-300">
          UI
        </div>
        <span className="rounded-full border border-slate-200/60 bg-white/80 px-2 py-0.5 text-[10px] text-slate-500 dark:border-slate-800/60 dark:bg-slate-950/40 dark:text-slate-300">
          New
        </span>
      </div>
      <div className="mt-3 text-sm font-medium text-slate-600/90 dark:text-slate-200/90">Project Alpha</div>
      <div className="text-xs text-slate-500/90 dark:text-slate-400/90">Dashboard redesign concept</div>
    </div>
  );
}

function Bars() {
  return (
    <div className="rounded-xl border border-slate-200/60 bg-white/70 p-4 dark:border-slate-800/60 dark:bg-slate-900/40">
      <div className="mb-3 h-4 w-24 rounded bg-slate-100/90 dark:bg-slate-800/60" />
      <div className="flex items-end gap-2">
        {[22, 40, 28, 52, 36, 64, 48].map((h, i) => (
          <div key={i} className="w-4 rounded-t bg-slate-300/70 dark:bg-slate-700/60" style={{ height: `${h}px` }} />
        ))}
      </div>
    </div>
  );
}

function LineChart() {
  return (
    <div className="rounded-xl border border-slate-200/60 bg-white/70 p-4 dark:border-slate-800/60 dark:bg-slate-900/40">
      <div className="mb-2 h-4 w-20 rounded bg-slate-100/90 dark:bg-slate-800/60" />
      <div className="relative h-24 w-full overflow-hidden rounded bg-slate-50/80 dark:bg-slate-800/40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.25)_1px,transparent_1px)] bg-[size:24px_100%] dark:bg-[linear-gradient(to_right,rgba(51,65,85,0.35)_1px,transparent_1px)]" />
        <svg viewBox="0 0 200 100" className="relative h-full w-full">
          <polyline fill="none" stroke="rgba(148,163,184,0.7)" strokeWidth="2" points="0,70 30,60 60,65 90,50 120,58 150,40 180,45 200,30" />
        </svg>
      </div>
    </div>
  );
}

function Calendar() {
  const days = Array.from({ length: 14 }, (_, i) => i + 1);
  return (
    <div className="rounded-xl border border-slate-200/60 bg-white/70 p-3 dark:border-slate-800/60 dark:bg-slate-900/40">
      <div className="mb-2 flex items-center justify-between">
        <div className="h-4 w-24 rounded bg-slate-100/90 dark:bg-slate-800/60" />
        <div className="flex gap-1">
          <div className="h-6 w-6 rounded-md bg-slate-100/90 dark:bg-slate-800/60" />
          <div className="h-6 w-6 rounded-md bg-slate-100/90 dark:bg-slate-800/60" />
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map((d) => (
          <div key={d} className="aspect-square rounded-md bg-slate-50/90 dark:bg-slate-800/40" />
        ))}
      </div>
    </div>
  );
}

function FormCard() {
  return (
    <div className="rounded-xl border border-slate-200/60 bg-white/70 p-4 dark:border-slate-800/60 dark:bg-slate-900/40">
      <div className="grid gap-2">
        <label className="text-[11px] text-slate-500 dark:text-slate-400">Name</label>
        <div className="rounded-md border border-slate-200/60 bg-white/80 px-3 py-2 text-[12px] text-slate-600 dark:border-slate-800/60 dark:bg-slate-950/40 dark:text-slate-300">Jatin</div>
        <label className="mt-2 text-[11px] text-slate-500 dark:text-slate-400">Email</label>
        <div className="rounded-md border border-slate-200/60 bg-white/80 px-3 py-2 text-[12px] text-slate-600 dark:border-slate-800/60 dark:bg-slate-950/40 dark:text-slate-300">jatin@example.com</div>
      </div>
    </div>
  );
}

function TableMini() {
  return (
    <div className="rounded-xl border border-slate-200/60 bg-white/70 p-3 dark:border-slate-800/60 dark:bg-slate-900/40">
      <div className="mb-2 grid grid-cols-3 gap-2 text-[11px] text-slate-500 dark:text-slate-400"><div>Item</div><div>Status</div><div>ETA</div></div>
      {[1, 2, 3].map((i) => (
        <div key={i} className="mb-1 grid grid-cols-3 gap-2 text-[12px]">
          <div className="rounded bg-slate-50/90 px-2 py-1 dark:bg-slate-800/40">Row {i}</div>
          <div className="rounded bg-slate-50/90 px-2 py-1 dark:bg-slate-800/40">OK</div>
          <div className="rounded bg-slate-50/90 px-2 py-1 dark:bg-slate-800/40">2d</div>
        </div>
      ))}
    </div>
  );
}

// NEW: KPI, Login, Exercise & Subscription charts, Donut, Payments
function KpiRevenue() {
  return (
    <div className="rounded-xl border border-slate-200/60 bg-white/80 p-4 dark:border-slate-800/60 dark:bg-slate-900/50">
      <div className="text-[11px] uppercase tracking-wide text-slate-500 dark:text-slate-400">Total Revenue</div>
      <div className="mt-1 text-2xl font-semibold text-slate-700 dark:text-slate-100">$15,231.89</div>
      <div className="text-[11px] text-slate-500 dark:text-slate-400">+20% from last month</div>
      <div className="mt-3 h-12 rounded bg-slate-50/80 dark:bg-slate-800/40" />
    </div>
  );
}

function LoginPanel() {
  return (
    <div className="rounded-xl border border-slate-200/60 bg-white/80 p-4 dark:border-slate-800/60 dark:bg-slate-900/50">
      <div className="text-sm font-medium text-slate-700 dark:text-slate-100">Create an account</div>
      <div className="mt-2 grid gap-2 text-[12px]">
        <div className="rounded-md border border-slate-200/60 bg-white/80 px-3 py-2 dark:border-slate-800/60 dark:bg-slate-950/40">m@example.com</div>
        <div className="rounded-md border border-slate-200/60 bg-white/80 px-3 py-2 dark:border-slate-800/60 dark:bg-slate-950/40">••••••••</div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2 text-[12px]">
        <div className="rounded-md border border-slate-200/60 bg-slate-50/80 py-2 text-center dark:border-slate-800/60 dark:bg-slate-900/40">GitHub</div>
        <div className="rounded-md border border-slate-200/60 bg-slate-50/80 py-2 text-center dark:border-slate-800/60 dark:bg-slate-900/40">Google</div>
      </div>
    </div>
  );
}

function ExerciseChart() {
  return (
    <div className="rounded-xl border border-slate-200/60 bg-white/80 p-4 dark:border-slate-800/60 dark:bg-slate-900/50">
      <div className="mb-1 text-[11px] text-slate-500 dark:text-slate-400">Exercise Minutes</div>
      <svg viewBox="0 0 300 100" className="h-24 w-full">
        <polyline fill="none" stroke="rgba(148,163,184,0.7)" strokeWidth="2" points="0,70 40,75 80,60 120,65 160,90 200,40 240,55 280,50" />
      </svg>
    </div>
  );
}

function SubsChart() {
  return (
    <div className="rounded-xl border border-slate-200/60 bg-white/80 p-4 dark:border-slate-800/60 dark:bg-slate-900/50">
      <div className="mb-1 text-[11px] text-slate-500 dark:text-slate-400">Subscriptions Over Time</div>
      <svg viewBox="0 0 300 100" className="h-24 w-full">
        <polyline fill="none" stroke="rgba(148,163,184,0.7)" strokeWidth="2" points="0,80 30,70 60,60 90,65 120,55 150,40 180,35 210,45 240,38 270,30 300,25" />
      </svg>
    </div>
  );
}

function DonutGoal() {
  return (
    <div className="grid place-items-center rounded-xl border border-slate-200/60 bg-white/80 p-4 dark:border-slate-800/60 dark:bg-slate-900/50">
      <svg viewBox="0 0 120 120" className="h-24 w-24 -rotate-90">
        <circle cx="60" cy="60" r="52" stroke="rgba(148,163,184,0.3)" strokeWidth="12" fill="none" />
        <circle cx="60" cy="60" r="52" stroke="rgba(148,163,184,0.8)" strokeWidth="12" strokeDasharray="326" strokeDashoffset="120" fill="none" />
      </svg>
      <div className="-mt-12 text-center text-xs text-slate-600 dark:text-slate-300">
        Move Goal
        <div className="text-base font-semibold">350</div>
      </div>
    </div>
  );
}

function PaymentsList() {
  return (
    <div className="rounded-xl border border-slate-200/60 bg-white/80 p-3 dark:border-slate-800/60 dark:bg-slate-900/50">
      <div className="mb-1 text-[11px] text-slate-500 dark:text-slate-400">Payments</div>
      {[
        { n: "Pro Plan", a: "$316.00" },
        { n: "Add-on", a: "$29.00" },
        { n: "Usage", a: "$12.00" },
      ].map((r) => (
        <div key={r.n} className="flex items-center justify-between rounded bg-slate-50/80 px-2 py-1 text-[12px] dark:bg-slate-800/40">
          <span>{r.n}</span><span>{r.a}</span>
        </div>
      ))}
    </div>
  );
}

// Tailwind needs explicit class names for spans. Provide maps to avoid dynamic class generation issues.
const COL: Record<number, string> = {
  1: "col-span-1", 2: "col-span-2", 3: "col-span-3", 4: "col-span-4", 5: "col-span-5", 6: "col-span-6",
  7: "col-span-7", 8: "col-span-8", 9: "col-span-9", 10: "col-span-10", 11: "col-span-11", 12: "col-span-12",
};
const ROW: Record<number, string> = { 1: "row-span-1", 2: "row-span-2", 3: "row-span-3" };

type Tile = { Comp: () => JSX.Element; col: number; row: number; delay?: number };

const tiles: Tile[] = [
  { Comp: KpiRevenue, col: 3, row: 2, delay: 0.00 },
  { Comp: Bars, col: 2, row: 2, delay: 0.05 },
  { Comp: LoginPanel, col: 2, row: 2, delay: 0.08 },
  { Comp: LineChart, col: 5, row: 2, delay: 0.10 },

  { Comp: Calendar, col: 2, row: 2, delay: 0.15 },
  { Comp: PaymentsList, col: 2, row: 2, delay: 0.18 },
  { Comp: DonutGoal, col: 3, row: 2, delay: 0.20 },
  { Comp: SubsChart, col: 5, row: 2, delay: 0.22 },

  { Comp: ExerciseChart, col: 4, row: 2, delay: 0.26 },
  { Comp: FormCard, col: 2, row: 2, delay: 0.28 },
  { Comp: Calendar, col: 2, row: 2, delay: 0.30 },
  { Comp: TableMini, col: 4, row: 2, delay: 0.32 },

  // Extra row to fill bottom
  { Comp: Bars, col: 3, row: 2, delay: 0.36 },
  { Comp: Card, col: 3, row: 2, delay: 0.38 },
  { Comp: LineChart, col: 6, row: 2, delay: 0.40 },

  // Ultra-wide fillers left/right
  { Comp: Calendar, col: 2, row: 2, delay: 0.44 },
  { Comp: FormCard, col: 2, row: 2, delay: 0.46 },
  { Comp: TableMini, col: 2, row: 2, delay: 0.48 },
  { Comp: Card, col: 3, row: 2, delay: 0.50 },
  { Comp: Bars, col: 3, row: 2, delay: 0.52 },
  { Comp: LineChart, col: 4, row: 2, delay: 0.54 },
];

export default function UiCollage() {
  return (
    <div aria-hidden className="pointer-events-none absolute left-0 right-0 bottom-0 top-16 -z-10 select-none opacity-[0.6]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
      <div className="mx-auto grid h-full w-full max-w-none grid-cols-12 gap-4 px-6 [grid-auto-rows:92px] sm:[grid-auto-rows:100px] lg:[grid-auto-rows:120px]">
        {tiles.map(({ Comp, col, row, delay }, i) => (
          <motion.div
            key={i}
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: delay ?? i * 0.04 }}
            className={`${COL[col]} ${ROW[row]}`}
          >
            <Comp />
          </motion.div>
        ))}
      </div>
    </div>
  );
} 