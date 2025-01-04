import { useRef } from 'react';
import { useInView } from '../../hooks/useInView';

export const FadeIn = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`fade-in-section ${isInView ? 'is-visible' : ''}`}
    >
      {children}
    </div>
  );
}; 

export default FadeIn;