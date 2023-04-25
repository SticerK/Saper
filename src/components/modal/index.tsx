import React, { PropsWithChildren } from 'react';
import styles from './index.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

type ModalProps = {
  hide?: boolean;
};

const Modal: React.FC<PropsWithChildren<ModalProps>> = ({ children, hide }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Modal;
