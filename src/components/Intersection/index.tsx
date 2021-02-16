import React, { useEffect, useRef, useState } from 'react';

import { AnyStyledComponent } from 'styled-components';

import * as S from './styles';

const Intersection: React.FC<AnyStyledComponent> = ({
  children,
  className,
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer: IntersectionObserver = new IntersectionObserver(
      entries => {
        console.log(entries[0].isIntersecting);
        if (entries[0].isIntersecting === true) {
          setVisible(true);
        }
      },
      { threshold: 0, rootMargin: '-150px' }
    );
    // @ts-ignore
    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        // @ts-ignore
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <S.Container className={className} isVisible={visible} ref={ref}>
      {children}
    </S.Container>
  );
};

export default Intersection;
