import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export function FAQ() {
  const { messages } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section-spacing">
      <div className="section-container max-w-4xl">
        <h2 className="mb-8 text-center text-3xl font-bold">{messages.faq.title}</h2>
        <div className="space-y-3">
          {messages.faq.items.map((item, index) => {
            const isOpen = index === openIndex;
            return (
              <div key={item.question} className="rounded-lg border border-black/10 bg-black/5 dark:border-white/10 dark:bg-white/5">
                <button
                  className="flex w-full items-center justify-between px-5 py-4 text-left font-semibold"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  {item.question}
                  <span>{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && <p className="px-5 pb-4 text-sm text-black/70 dark:text-white/70">{item.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
