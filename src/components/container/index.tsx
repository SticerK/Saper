import React, { PropsWithChildren } from 'react';
import styles from './container.module.scss';

type ContainerProps = {
  width?: string;
  height?: string;
  mt?: string;
};

const Container: React.FC<PropsWithChildren<ContainerProps>> = ({
  children,
  width,
  height,
  mt,
}) => {
  return (
    <div className={styles.container} style={{ width, height: height }}>
      {children}
    </div>
  );
};

export default Container;
