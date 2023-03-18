import React from 'react';
import Settings from './components/settings/settings';
import { useSelector } from 'react-redux';
import { RootState } from './components/store/store';
import Field from './components/field';
import Win from './components/win';

const App: React.FC = () => {
  const { enter, win } = useSelector((state: RootState) => state.settingsSlice);

  if (win) return <Win />;

  return <>{!enter ? <Settings /> : <Field />}</>;
};
export default App;
