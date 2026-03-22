import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 320);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Voltar ao topo"
      className="fixed bottom-6 right-6 z-50 rounded-full bg-primary p-3 text-white shadow-lg transition hover:scale-105"
    >
      <FaArrowUp />
    </button>
  );
}
