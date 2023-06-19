import { Watch } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Watch
      height="100"
      width="100"
      radius="48"
      color="#3f51b5"
      ariaLabel="watch-loading"
      wrapperStyle={{ justifyContent: 'center', alignItems: 'center' }}
      wrapperClassName=""
      visible={true}
    />
  );
};
export default Loader;
