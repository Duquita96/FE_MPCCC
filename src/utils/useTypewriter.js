import { useEffect, useRef } from 'react';

const useTypewriter = (text, delay) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const handleType = () => {
      let str = text.toString();
      let i = 0;
      let el = elementRef.current;

      if (el) {
        el.innerHTML = '';
        const intervalId = setInterval(() => {
          i++;
          el.innerHTML = str.slice(0, i) + '|';
          if (i === str.length) {
            clearInterval(intervalId);
            el.innerHTML = str;
          }
        }, 10);
      }
    };

    setTimeout(handleType, delay);
  }, [text, delay]);

  return elementRef;
};

export default useTypewriter;