export function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="pulse-glow absolute -left-28 top-10 h-80 w-80 rounded-full bg-[#1C41F7]/20 blur-3xl" />
      <div className="float-soft absolute right-0 top-28 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(28,65,247,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(28,65,247,.055)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_72%)]" />
    </div>
  );
}
