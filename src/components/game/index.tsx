import React from 'react';
import styles from './game.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import Block from './block';
import _ from 'lodash';

const Game: React.FC = () => {
  const { arrayMines, ...mapGame } = useSelector((state: RootState) => state.settingsSlice);
  const tableRef = React.useRef<HTMLTableSectionElement>(null);

  let arrInx = 1;

  const addMine = (value: number) => arrayMines.some((item) => item === value);

  return (
    <div className={mapGame.losing ? [styles.main, styles.mistake].join(' ') : styles.main}>
      <table className={styles.space}>
        <tbody ref={tableRef}>
          {_.range(mapGame.height).map((x) => (
            <tr>
              {_.range(mapGame.width).map((y) => (
                <td>
                  <Block mine={addMine(arrInx)} index={arrInx++} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Game;
