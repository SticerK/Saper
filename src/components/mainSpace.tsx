import React from 'react';
import { useSelector } from 'react-redux';
import Win from './win';
import { RootState } from './store/store';
import Settings from './settings/settings';
import Field from './field';

const MainSpace: React.FC = () => {
  const { enter, win } = useSelector((state: RootState) => state.settingsSlice);

  if (win) return <Win />;

  return <>{!enter ? <Settings /> : <Field />}</>;
};

export default MainSpace;
