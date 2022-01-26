/* eslint-disable react/react-in-jsx-scope */
import Classes from './Banner.module.css';

function Banner(props) {
  return (
    <div className={Classes.banner}>
      <img src="/Rectangle_282.png" className={Classes.image} />
    </div>
  );
}

export default Banner;
