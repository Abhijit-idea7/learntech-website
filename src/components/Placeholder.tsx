import { site } from '@/content/site';

/**
 * Dashed "content needed" box. Shows only while site.showPlaceholders is true,
 * so empty slots are visible on the test site and disappear before go-live.
 */
export default function Placeholder({
  label,
  hint,
  className = '',
  tall = false,
}: {
  label: string;
  hint?: string;
  className?: string;
  tall?: boolean;
}) {
  if (!site.showPlaceholders) return null;
  return (
    <div className={`lt-placeholder flex flex-col items-start justify-center gap-1 p-4 md:p-5 ${tall ? 'min-h-[220px]' : ''} ${className}`}>
      <span className="font-grotesk font-bold t-xs uppercase tracking-[0.12em] text-crimson">Content needed</span>
      <span className="font-grotesk font-bold t-base text-navy">{label}</span>
      {hint && <span className="t-sm2 text-navy/60">{hint}</span>}
    </div>
  );
}
