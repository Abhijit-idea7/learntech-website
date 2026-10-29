import { useEffect, useRef, useState } from 'react';

interface SectionDividerProps {
  color?: 'crimson' | 'sky' | 'moss' | 'navy';
  variant?: 'zigzag' | 'straight';
}

export default function SectionDivider({ color = 'crimson', variant = 'zigzag' }: SectionDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const colorMap = {
    crimson: '#D8315B',
    sky: '#3AA5D4',
    moss: '#647439',
    navy: '#0F2A5F',
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (variant === 'straight') {
    return (
      <div ref={ref} className="wrap" aria-hidden="true">
        <svg
          viewBox="0 0 1260 24"
          preserveAspectRatio="none"
          className="w-full h-[20px]"
          fill="none"
        >
          <line
            x1="0"
            y1="12"
            x2="1260"
            y2="12"
            stroke={colorMap[color]}
            strokeWidth="3"
            strokeLinecap="round"
            className={`draw-path ${visible ? 'visible' : ''}`}
          />
        </svg>
      </div>
    );
  }

  return (
    <div ref={ref} className="wrap" aria-hidden="true">
      <svg
        viewBox="0 0 1260 24"
        preserveAspectRatio="none"
        className="w-full h-[20px]"
        fill="none"
      >
        <path
          d="M0 12 L40 12 L52 4 L64 20 L76 4 L88 20 L100 4 L112 20 L124 12 L164 12 L176 4 L188 20 L200 4 L212 20 L224 4 L236 20 L248 12 L288 12 L300 4 L312 20 L324 4 L336 20 L348 4 L360 20 L372 12 L412 12 L424 4 L436 20 L448 4 L460 20 L472 4 L484 20 L496 12 L536 12 L548 4 L560 20 L572 4 L584 20 L596 4 L608 20 L620 12 L660 12 L672 4 L684 20 L696 4 L708 20 L720 4 L732 20 L744 12 L784 12 L796 4 L808 20 L820 4 L832 20 L844 4 L856 20 L868 12 L908 12 L920 4 L932 20 L944 4 L956 20 L968 4 L980 20 L992 12 L1032 12 L1044 4 L1056 20 L1068 4 L1080 20 L1092 4 L1104 20 L1116 12 L1156 12 L1168 4 L1180 20 L1192 4 L1204 20 L1216 12 L1260 12"
          stroke={colorMap[color]}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`draw-path ${visible ? 'visible' : ''}`}
        />
      </svg>
    </div>
  );
}
