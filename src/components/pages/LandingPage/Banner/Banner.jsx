import Classes from './Banner.module.css';

function Banner(props) {
  return (
    <div className={Classes.banner}>
      <img src="/HERO_SECTION_ILLUS-01.jpg" className={Classes.image} />
    </div>
  );
}

export default Banner;
