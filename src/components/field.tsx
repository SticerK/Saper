import React from 'react';
import Container from './container';
import Header from './header';
import Game from './game';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import Again from './again';
import { addMines } from './redux/settingsSlice';
import { useDispatch } from 'react-redux';

const Field: React.FC = () => {
  const { losing } = useSelector((state: RootState) => state.settingsSlice);
  const dispath = useDispatch();
  React.useEffect(() => {
    dispath(addMines());
  }, []);

  return losing ? (
    <Again />
  ) : (
    <Container>
      <Header /> <Game />
    </Container>
  );
};

export default Field;
