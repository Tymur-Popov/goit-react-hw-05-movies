import { FallingLines } from 'react-loader-spinner';
import { Loading } from './Loader.styled';

const Loader = () => {
  return (
    <Loading>
      <FallingLines
        color="#4fa94d"
        width="100"
        visible={true}
        ariaLabel="falling-lines-loading"
      />
    </Loading>
  );
};
export default Loader;
