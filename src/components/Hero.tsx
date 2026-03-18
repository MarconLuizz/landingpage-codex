import { useState } from 'react';
import { ChatInput } from './ChatInput';
import { useLanguage } from '../context/LanguageContext';

export function Hero() {
  const { messages } = useLanguage();
  const [query, setQuery] = useState('');
  const [typingPaused, setTypingPaused] = useState(false);

  const placeholderSamples = [
    messages.hero.placeholder1,
    messages.hero.placeholder2,
    messages.hero.placeholder3,
    messages.hero.placeholder4,
  ];

  const examples = [
    messages.hero.example1,
    messages.hero.example2,
    messages.hero.example3,
    messages.hero.example4,
  ];

  const applyExample = (text: string) => {
    setTypingPaused(true);
    setQuery(text);
  };

  return (
    <section id="inicio" className="section-spacing">
      <div className="section-container">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center animate-[fadeIn_.55s_ease-out]">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl lg:text-6xl">
            {messages.hero.line1}
          </h1>

          <h2 className="mt-4 max-w-3xl text-xl font-bold text-white sm:text-2xl">
            {messages.hero.line2}
          </h2>

          <p className="mt-5 max-w-xl text-sm text-gray-400 sm:text-base">
            {messages.hero.description}
          </p>

          <div className="mt-10 w-full max-w-3xl">
            <ChatInput
              placeholders={placeholderSamples}
              value={query}
              onValueChange={setQuery}
              paused={typingPaused}
              onPause={() => setTypingPaused(true)}
              leadLabel={messages.hero.lead}
              companyLabel={messages.hero.company}
              investigateLabel={messages.hero.investigate}
            />
          </div>

          <div className="mt-6 w-full max-w-3xl">
            <p className="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-white/60">
              {messages.hero.examplesTitle}
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {examples.map((example) => (
                <button
                  key={example}
                  type="button"
                  onClick={() => applyExample(example)}
                  className="rounded-lg border border-primary/60 bg-[#131314] px-4 py-3 text-left text-xs text-white/80 transition duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-white"
                >
                  {example}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
