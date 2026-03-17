import { useLanguage } from '../context/LanguageContext';

export function Supporters() {
  const { messages } = useLanguage();
  const logos = [...messages.supporters.logos, ...messages.supporters.logos];

  return (
    <section id="apoiadores" className="section-spacing bg-white dark:bg-[#090909]">
      <div className="section-container">
        <h2 className="mb-8 text-center text-2xl font-bold">{messages.supporters.title}</h2>
        <div className="overflow-hidden rounded-lg border border-black/10 bg-black/5 py-6 dark:border-white/10 dark:bg-white/5">
          <div className="animate-[scroll_18s_linear_infinite] whitespace-nowrap">
            {logos.map((logo, idx) => (
              <span key={`${logo}-${idx}`} className="mx-8 inline-block text-sm font-semibold opacity-80 sm:text-lg">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
