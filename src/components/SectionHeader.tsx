import { ReactNode } from 'react';

interface SectionHeaderProps {
  eyebrow: string;
  children?: ReactNode;
}

export default function SectionHeader({ eyebrow, children }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <span className="eyebrow whitespace-nowrap">{eyebrow}</span>
      {children !== undefined ? children : <div className="section-rule" />}
    </div>
  );
}
