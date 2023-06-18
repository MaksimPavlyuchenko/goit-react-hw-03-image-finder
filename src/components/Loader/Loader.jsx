import { Watch } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Watch
      height="60"
      width="60"
      radius="48"
      color="#3f51b5"
      ariaLabel="watch-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
};
export default Loader;
