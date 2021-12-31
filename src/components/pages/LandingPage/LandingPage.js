import Banner from './Banner/Banner';
import Image from './merchandise.png';
import sectionImage from '../../bg.png';
import Section from './Section/Section';
import Classes from './LandingPage.module.css';
import Footer from '../../Footer';

function landingPage() {
  return (
    <div className={Classes.landing_page}>
      {/* <h1> Landing Page</h1> */}
      <Banner imagePath={Image} />
      <Section title="ABOUT US" imagePath={sectionImage} buttonText="KNOW MORE">
        After weeks of speculation, uncertainty and postponement, the FMC Weekend is back with a
        bang. After 6 hugely successful editions, this year's edition is going to be just as
        majestic as ever. What's even better this time around is the fact that you can have the same
        surreal experience in its entirety from the comfort of your own homes. Participate in
        various events to put your mettle to test, attend various workshops conducted by masters of
        their respective craft to refine your skills, all without getting out of your PJs.
      </Section>

      <Section title="EVENTS" imagePath={sectionImage} buttonText="KNOW MORE">
        After weeks of speculation, uncertainty and postponement, the FMC Weekend is back with a
        bang. After 6 hugely successful editions, this year's edition is going to be just as
        majestic as ever. What's even better this time around is the fact that you can have the same
        surreal experience in its entirety from the comfort of your own homes. Participate in
        various events to put your mettle to test, attend various workshops conducted by masters of
        their respective craft to refine your skills, all without getting out of your PJs.
      </Section>

      <Banner imagePath={Image} />
      <Footer />
    </div>
  );
}

export default landingPage;
