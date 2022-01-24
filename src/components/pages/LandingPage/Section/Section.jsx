import Classes from './Section.module.css';
import Button from './Button/Button';

function Section(props) {
  return (
    <div className={Classes.section}>
      {/* <h2 >Title</h2> */}
      {/* <div > */}
      <h2 className={Classes.section_title}>{props.title}</h2>
      {/* </div> */}

      <div className={Classes.row}>
        <div className={Classes.column_1}>
          <p className={Classes.section_content}>
            {/* After weeks of speculation, uncertainty and postponement, the FMC Weekend is back with a
            bang. After 6 hugely successful editions, this year's edition is going to be just as
            majestic as ever. What's even better this time around is the fact that you can have the
            same surreal experience in its entirety from the comfort of your own homes. Participate
            in various events to put your mettle to test, attend various workshops conducted by
            masters of their respective craft to refine your skills, all without getting out of your
            PJs. */}
            {props.children}
          </p>
          <div className={Classes.section_button}>
            <Button>{props.buttonText}</Button>
          </div>
        </div>
        <div className={Classes.column_2}>
          {/* <h2>Column 2</h2>
          <p>Some text..</p> */}

          <img src="/clubs_2X.png" className={Classes.section_image} />
        </div>
      </div>
    </div>
  );
}
export default Section;
