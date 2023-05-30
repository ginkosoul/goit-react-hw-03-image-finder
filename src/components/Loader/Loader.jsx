import { Bars } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div>
      <Bars
        height="60"
        width="100%"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
