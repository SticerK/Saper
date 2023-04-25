import Mines from './mines';
import _ from 'lodash';

const Fields = ({ arrayX, arrayY, openField }) => {
  return (
    <table>
      {arrayX.map((item, index) => (
        <tr key={index}>
          {arrayY.map((item, index) => (
            <td className='field' key={index} onClick={openField}>
              <Mines></Mines>
            </td>
          ))}
        </tr>
      ))}
    </table>
  );
};

export default Fields;
