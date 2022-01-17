import Cards from "./Cards";
import classes from "./SponsorSection.module.css";

function SponsorSection(props) {
  return (
    // <div style={{ backgroundColor: "#bbb", display: "flex", flexWrap: "wrap", marginLeft: "3vw" }}>
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        marginLeft: "5vw",
        paddingTop: "3vh",
      }}
    >
      {/* <h1>Sponsor 1</h1> */}
      <div className={classes.sponsor_title}>
        <h1 id={props.sponsorId}>Sponsor 1</h1>
      </div>
      <div style={{ paddingLeft: "4vw" }}>
        <Cards />
      </div>
    </div>
  );
}

export default SponsorSection;
