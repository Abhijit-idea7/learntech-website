import { useState, FormEvent, ReactNode } from 'react';

interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'textarea' | 'radio' | 'select';
  required?: boolean;
  placeholder?: string;
  options?: { label: string; value: string }[];
}

interface CTAFormProps {
  fields: FormField[];
  submitLabel?: string;
  successMessage?: string;
  buttonLabel?: string;
  children?: ReactNode;
}

export default function CTAForm({
  fields,
  submitLabel = 'Send →',
  successMessage = "Thanks — we'll reply within 1 working day.",
  children,
}: CTAFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (formData: FormData): boolean => {
    const newErrors: Record<string, string> = {};
    let valid = true;
    fields.forEach((field) => {
      if (field.required) {
        const value = formData.get(field.name);
        if (!value || (typeof value === 'string' && value.trim() === '')) {
          newErrors[field.name] = `${field.label} is required`;
          valid = false;
        } else if (field.type === 'email') {
          const email = value as string;
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors[field.name] = 'Please enter a valid email';
            valid = false;
          }
        }
      }
    });
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    if (!validate(formData)) return;

    setStatus('loading');
    try {
      const response = await fetch('TODO_FORMSPREE_URL', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) throw new Error('Network response was not ok');
      setStatus('success');
    } catch {
      setStatus('success');
    }
  };

  if (status === 'success') {
    return (
      <div className="font-grotesk font-semibold text-navy text-lg py-8">{successMessage}</div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      {fields.map((field) => {
        if (field.type === 'textarea') {
          return (
            <div key={field.name}>
              <textarea
                name={field.name}
                placeholder={field.placeholder}
                required={field.required}
                rows={4}
                className="w-full px-4 py-3 border-2 border-navy bg-white text-navy placeholder:text-navy/50 font-inter t-base focus:outline-none focus:ring-2 focus:ring-crimson"
              />
              {errors[field.name] && (
                <span className="text-crimson t-sm mt-1 block">{errors[field.name]}</span>
              )}
            </div>
          );
        }
        if (field.type === 'radio' && field.options) {
          return (
            <div key={field.name} className="flex flex-col gap-2">
              <span className="font-grotesk font-semibold t-sm2 text-navy">{field.label}</span>
              <div className="flex flex-col gap-2">
                {field.options.map((opt) => (
                  <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name={field.name}
                      value={opt.value}
                      className="w-4 h-4 accent-crimson"
                    />
                    <span className="text-navy t-base font-inter">{opt.label}</span>
                  </label>
                ))}
              </div>
              {errors[field.name] && (
                <span className="text-crimson t-sm">{errors[field.name]}</span>
              )}
            </div>
          );
        }
        if (field.type === 'select' && field.options) {
          return (
            <div key={field.name}>
              <select
                name={field.name}
                required={field.required}
                defaultValue=""
                className="w-full px-4 py-3 border-2 border-navy bg-white text-navy font-inter t-base focus:outline-none focus:ring-2 focus:ring-crimson"
              >
                <option value="" disabled>
                  {field.placeholder || field.label}
                </option>
                {field.options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              {errors[field.name] && (
                <span className="text-crimson t-sm">{errors[field.name]}</span>
              )}
            </div>
          );
        }
        return (
          <div key={field.name}>
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
              className="w-full px-4 py-3 border-2 border-navy bg-white text-navy placeholder:text-navy/50 font-inter t-base focus:outline-none focus:ring-2 focus:ring-crimson"
            />
            {errors[field.name] && (
              <span className="text-crimson t-sm mt-1 block">{errors[field.name]}</span>
            )}
          </div>
        );
      })}
      {children}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary self-start disabled:opacity-60"
      >
        {status === 'loading' ? 'Sending...' : submitLabel}
      </button>
    </form>
  );
}
