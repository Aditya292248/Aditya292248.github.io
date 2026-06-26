'use client';

interface MarqueeTickerProps {
  items: string[];
  speed?: number;
}

export default function MarqueeTicker({ items, speed = 30 }: MarqueeTickerProps) {
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden w-full py-4">
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, var(--background), transparent)' }} />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, var(--background), transparent)' }} />

      <div
        className="flex gap-6 whitespace-nowrap"
        style={{ animation: `marquee ${speed}s linear infinite` }}
      >
        {doubled.map((item, i) => {
          const isPrimary = i % 2 === 0;
          return (
            <span
              key={i}
              className="inline-flex items-center gap-2 text-sm font-mono px-3 py-1 rounded-full border border-border/50 flex-shrink-0"
              style={{ color: isPrimary ? '#10B981' : '#F59E0B' }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: isPrimary ? '#10B981' : '#F59E0B', opacity: 0.5 }}
              />
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
