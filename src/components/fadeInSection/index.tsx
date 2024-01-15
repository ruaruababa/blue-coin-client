import { useEffect, useRef, useState } from 'react';

export function FadeInSection(props: any) {
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef<any>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry: any) => setVisible(entry.isIntersecting));
    });

    observer.observe(domRef?.current);

    return () => observer?.unobserve(domRef?.current);
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}
