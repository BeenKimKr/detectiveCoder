import { useState } from 'react';
import { css } from '@emotion/react';
import BarLoader from 'react-spinners/BarLoader';

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Spinner = ({ loading }) => {
  let [color, setColor] = useState('#55b4b7');

  return (
    <>
      <BarLoader color={color} loading={loading} css={override} size={150} />
    </>
  );
};

export default Spinner;
