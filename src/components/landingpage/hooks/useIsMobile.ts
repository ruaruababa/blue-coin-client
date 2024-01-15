import { debounce } from 'lodash';
import { useEffect, useState } from 'react';

const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateSize = (): void => {
      setIsMobile(window.innerWidth < 768);
    };
    updateSize();
    window.addEventListener('resize', debounce(updateSize, 250));
    // updateSize();
    return (): void => window.removeEventListener('resize', updateSize);
  }, []);

  return isMobile;
};

export default useIsMobile;
