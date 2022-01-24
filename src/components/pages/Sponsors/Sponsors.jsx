/* eslint-disable react/react-in-jsx-scope */
import Menu from './SideBar/Menu';
import classes from './Sponsors.module.css';
import SponsorSection from './SponsorSection/SponsorSection';
import Footer from '../../Footer';

function Sponsors() {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.sidebar}>
          <Menu />
        </div>

        <div className={classes.main}>
          <SponsorSection sponsorId="sponsor_1" />
          <SponsorSection sponsorId="sponsor_2" />
          <SponsorSection sponsorId="sponsor_3" />
          <SponsorSection sponsorId="sponsor_4" />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Sponsors;
