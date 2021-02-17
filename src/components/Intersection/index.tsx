import React, { useEffect, useRef, useState } from 'react';

import { AnyStyledComponent } from 'styled-components';

import * as S from './styles';

interface ItersectionProps {
  className?: AnyStyledComponent;
}

const Intersection: React.FC<ItersectionProps> = ({ children, className }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer: IntersectionObserver = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting === true) {
          setVisible(true);
        }
      },
      { threshold: 0, rootMargin: '-150px' }
    );

    // @ts-ignore
    observer.observe(ref.current);

    // return () => {
    //   if (ref.current) {
    //     // @ts-ignore
    //     observer.unobserve(currentRef);
    //   }
    // };
  }, []);

  return (
    <S.Container className={className} isVisible={visible} ref={ref}>
      {children}
    </S.Container>
  );
};

export default Intersection;
