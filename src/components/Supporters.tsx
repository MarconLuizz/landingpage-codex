import gcpLogo from '../assets/supporters/gcp-logo.png';
import sebraeLogo from '../assets/supporters/sebrae-logo.png';
import sprintLogo from '../assets/supporters/sprint-logo.png';
import { useLanguage } from '../context/LanguageContext';

const supporters = [
  { name: 'SPRINT CP', src: sprintLogo, delayClass: 'supporter-float-delay-0' },
  { name: 'SEBRAE PR', src: sebraeLogo, delayClass: 'supporter-float-delay-1' },
  { name: 'GOOGLE CLOUD PLATFORM', src: gcpLogo, delayClass: 'supporter-float-delay-2' },
];

export function Supporters() {
  const { messages } = useLanguage();
  const loopingSupporters = [...supporters, ...supporters];

  return (
    <section id="apoiadores" className="py-8 bg-white dark:bg-[#090909]">
      <div className="section-container">
        <h2 className="mb-4 text-center text-1xl font-bold">
          {messages.supporters.title}
        </h2>

        <div className="relative mx-auto max-w-xl overflow-hidden">
          
          {/* fade lateral */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-white dark:from-[#090909] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white dark:from-[#090909] to-transparent z-10" />

          <div className="flex w-max items-center gap-10 sm:gap-12 animate-[scroll_35s_linear_infinite]">
            {loopingSupporters.map((supporter, idx) => (
              <div
                key={`${supporter.name}-${idx}`}
                className={`supporter-float ${supporter.delayClass} flex h-14 min-w-[160px] items-center justify-center px-2`}
              >
                <img
                  src={supporter.src}
                  alt={supporter.name}
                  className="h-10 sm:h-12 md:h-18 object-contain opacity-80 transition-all duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
