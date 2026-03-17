import { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';

export function useScrollReveal() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
    margin: '0px 0px -100px 0px',
  });

  return { ref, isInView };
}
