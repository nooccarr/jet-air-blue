import { useEffect } from 'react';

const useScrollTop = () => {
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
};

export default useScrollTop;