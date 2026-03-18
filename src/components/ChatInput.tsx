import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ChatInputProps {
  placeholders: string[];
  value: string;
  onValueChange: (value: string) => void;
  paused: boolean;
  onPause: () => void;
  leadLabel: string;
  companyLabel: string;
  investigateLabel: string;
}

type Mode = 'lead' | 'company';

export function ChatInput({
  placeholders,
  value,
  onValueChange,
  paused,
  onPause,
  leadLabel,
  companyLabel,
  investigateLabel,
}: ChatInputProps) {
  const navigate = useNavigate();
  const [mode, setMode] = useState<Mode>('lead');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [typedPlaceholder, setTypedPlaceholder] = useState('');

  const currentPlaceholder = useMemo(
    () => placeholders[placeholderIndex % placeholders.length] ?? '',
    [placeholderIndex, placeholders],
  );

  useEffect(() => {
    if (paused || value || !currentPlaceholder || placeholders.length === 0) return;

    let timeoutId: number;
    let charIndex = 0;
    let deleting = false;

    const tick = () => {
      charIndex = deleting
        ? Math.max(0, charIndex - 1)
        : Math.min(currentPlaceholder.length, charIndex + 1);

      setTypedPlaceholder(currentPlaceholder.slice(0, charIndex));

      if (!deleting && charIndex === currentPlaceholder.length) {
        timeoutId = window.setTimeout(() => {
          deleting = true;
          tick();
        }, 1200);
        return;
      }

      if (deleting && charIndex === 0) {
        setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
        return;
      }

      timeoutId = window.setTimeout(tick, deleting ? 24 : 42);
    };

    timeoutId = window.setTimeout(tick, 300);
    return () => window.clearTimeout(timeoutId);
  }, [currentPlaceholder, paused, placeholders.length, value]);

  const stopAnimation = () => onPause();

  const handleChange = (nextValue: string) => {
    if (!paused) stopAnimation();
    onValueChange(nextValue);
  };

  return (
    <div className="w-full rounded-xl border border-primary/40 bg-[#131314] p-4 shadow-2xl shadow-primary/10 backdrop-blur">
      <div className="mb-3 flex w-fit rounded-full border border-white/15 bg-black/30 p-1">
        <button
          type="button"
          className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
            mode === 'lead' ? 'bg-primary text-white' : 'text-white/70 hover:text-white'
          }`}
          onClick={() => setMode('lead')}
        >
          {leadLabel}
        </button>
        <button
          type="button"
          className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
            mode === 'company' ? 'bg-primary text-white' : 'text-white/70 hover:text-white'
          }`}
          onClick={() => setMode('company')}
        >
          {companyLabel}
        </button>
      </div>

      <div className="relative">
        <input
          aria-label="lead-investigation-query"
          value={value}
          onFocus={stopAnimation}
          onClick={stopAnimation}
          onChange={(event) => handleChange(event.target.value)}
          placeholder={typedPlaceholder}
          className="w-full rounded-xl border border-white/15 bg-black/35 py-4 pl-4 pr-4 text-sm text-white outline-none transition focus:border-primary sm:pr-36"
        />

        <button
          type="button"
          onClick={() => navigate('/registro')}
          className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110 sm:absolute sm:right-2 sm:top-1/2 sm:mt-0 sm:w-auto sm:-translate-y-1/2"
        >
          <span aria-hidden>🔍</span>
          {investigateLabel}
        </button>
      </div>
    </div>
  );
}
