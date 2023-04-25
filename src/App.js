import './index.css';
import Fields from './components/fields';

import { useState } from 'react';
import _ from 'lodash';

function App() {
  const [width, setWidth] = useState(16);
  const [height, setHeight] = useState(16);
  const [open, setOpren] = useState(false)
  const arrayX = _.range(0, width + 1);
  const arrayY = _.range(0, height + 1);

  const openField = () => {
    console.log('hi');
  };

  return (
    <>
      <Fields openField={openField} arrayX={arrayX} arrayY={arrayY}></Fields>
    </>
  );
}

export default App;
