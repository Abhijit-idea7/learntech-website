import CTAForm from './CTAForm';

interface CTABandProps {
  heading: string;
  fields?: Array<{
    name: string;
    label: string;
    type: 'text' | 'email' | 'textarea' | 'radio' | 'select';
    required?: boolean;
    placeholder?: string;
    options?: { label: string; value: string }[];
  }>;
  submitLabel?: string;
  footnote?: string;
  children?: React.ReactNode;
}

export default function CTABand({
  heading,
  fields,
  submitLabel = 'Send →',
  footnote = 'We reply within 1 working day.',
  children,
}: CTABandProps) {
  const defaultFields = [
    { name: 'email', label: 'Work email', type: 'email' as const, required: true, placeholder: 'Work email' },
    { name: 'message', label: 'Message', type: 'textarea' as const, required: true, placeholder: "What's on your mind?" },
  ];

  return (
    <section className="wrap py-12 md:py-16">
      <div className="bg-crimson border-2 border-navy cta-pulse p-6 md:p-10">
        <div className="max-w-[720px] mx-auto text-center">
          <h3 className="font-grotesk font-bold text-white t-3xl leading-[1.1] mb-6 md:mb-8">
            {heading}
          </h3>
          {fields ? (
            <CTAForm fields={fields} submitLabel={submitLabel} />
          ) : (
            <CTAForm fields={defaultFields} submitLabel={submitLabel} />
          )}
          {children}
          <p className="text-white/80 t-sm2 mt-6">{footnote}</p>
        </div>
      </div>
    </section>
  );
}
