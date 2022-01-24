/* eslint-disable react/react-in-jsx-scope */
import Classes from './Banner.module.css';

function Banner(props) {
  return (
    <div className={Classes.banner}>
      <img src="/Rectangle_28_(1).png" className={Classes.image} />
    </div>
  );
}

export default Banner;
