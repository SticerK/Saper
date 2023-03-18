import React from 'react';
import styles from './game.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import Mine from './mine';
import { losingGame } from '../redux/settingsSlice';
import { RootState } from '../store/store';
import { allBlocks, verification } from '../utils/checkFields';
import Bomb from './bomb';
import { checkWin } from '../redux/settingsSlice';

type blockProps = {
  mine: boolean;
  index: number;
};

const Block: React.FC<blockProps> = ({ mine, index }) => {
  const nodeRef = React.useRef<HTMLDivElement>(null);
  const dispath = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [find, setFind] = React.useState(false);
  const [num, setNum] = React.useState(0);

  const { width } = useSelector((state: RootState) => state.settingsSlice);

  const checkField = (e: any) => {
    setOpen(true);
    if (nodeRef.current === null) {
      return;
    }
    if (nodeRef.current.children?.length) dispath(losingGame());
    setNum(
      verification(
        nodeRef.current.closest('tbody') as HTMLTableSectionElement,
        e.target,
        index,
        Number(width)
      )
    );
  };

  const findMine = (e: React.MouseEvent<HTMLDivElement>) => {
    setFind((prev) => !prev);
    e.preventDefault();
    dispath(checkWin(index));
  };

  return (
    <div
      data-item={index}
      className={open ? [styles.block, styles.open].join(' ') : styles.block}
      ref={nodeRef}
      onClick={checkField}
      onContextMenu={findMine}>
      {num ? num : null}
      {mine ? <Mine open={open} /> : null}
      {find ? <Bomb /> : null}
    </div>
  );
};

export default Block;
