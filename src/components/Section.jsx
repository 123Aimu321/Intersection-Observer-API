import { useEffect, useRef, useState } from 'react';

export default function Section({ children, bgColor }) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-in-out h-screen flex items-center justify-center text-white text-4xl font-bold ${
        isVisible ? bgColor : 'bg-gray-800 opacity-50'
      }`}
    >
      {children}
    </div>
  );
}
