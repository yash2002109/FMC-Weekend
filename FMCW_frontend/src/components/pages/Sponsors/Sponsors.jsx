import Menu from "./SideBar/Menu";
import classes from "./Sponsors.module.css";
import SponsorSection from "./SponsorSection/SponsorSection";

function Sponsors() {
  return (
    <div
      className={classes.wrapper}
      style={{
        backgroundImage: `url("https://fmcweekend-angrycder.vercel.app/d.e7966721851bfd18d00b.jpg")`,
        // width: "100vw",
        // height: "100vh",
      }}
    >
      <div className={classes.sidebar}>
        <Menu />
      </div>

      <div className={classes.main}>
        <SponsorSection sponsorId="sponsor_1" />
        <SponsorSection sponsorId="sponsor_2" />
        <SponsorSection sponsorId="sponsor_3" />
        <SponsorSection sponsorId="sponsor_4" />
        {/* <h1>Sponsors</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis
          praesentium quam cum saepe quia laborum est sapiente sint quidem
          obcaecati, reiciendis, repudiandae hic voluptatum iste porro illum
          dolorem ipsum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis
          praesentium quam cum saepe quia laborum est sapiente sint quidem
          obcaecati, reiciendis, repudiandae hic voluptatum iste porro illum
          dolorem ipsum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis
          praesentium quam cum saepe quia laborum est sapiente sint quidem
          obcaecati, reiciendis, repudiandae hic voluptatum iste porro illum
          dolorem ipsum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis
          praesentium quam cum saepe quia laborum est sapiente sint quidem
          obcaecati, reiciendis, repudiandae hic voluptatum iste porro illum
          dolorem ipsum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis
          praesentium quam cum saepe quia laborum est sapiente sint quidem
          obcaecati, reiciendis, repudiandae hic voluptatum iste porro illum
          dolorem ipsum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis
          praesentium quam cum saepe quia laborum est sapiente sint quidem
          obcaecati, reiciendis, repudiandae hic voluptatum iste porro illum
          dolorem ipsum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis
          praesentium quam cum saepe quia laborum est sapiente sint quidem
          obcaecati, reiciendis, repudiandae hic voluptatum iste porro illum
          dolorem ipsum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis
          praesentium quam cum saepe quia laborum est sapiente sint quidem
          obcaecati, reiciendis, repudiandae hic voluptatum iste porro illum
          dolorem ipsum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis
          praesentium quam cum saepe quia laborum est sapiente sint quidem
          obcaecati, reiciendis, repudiandae hic voluptatum iste porro illum
          dolorem ipsum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis
          praesentium quam cum saepe quia laborum est sapiente sint quidem
          obcaecati, reiciendis, repudiandae hic voluptatum iste porro illum
          dolorem ipsum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis
          praesentium quam cum saepe quia laborum est sapiente sint quidem
          obcaecati, reiciendis, repudiandae hic voluptatum iste porro illum
          dolorem ipsum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis
          praesentium quam cum saepe quia laborum est sapiente sint quidem
          obcaecati, reiciendis, repudiandae hic voluptatum iste porro illum
          dolorem ipsum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis
          praesentium quam cum saepe quia laborum est sapiente sint quidem
          obcaecati, reiciendis, repudiandae hic voluptatum iste porro illum
          dolorem ipsum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis
          praesentium quam cum saepe quia laborum est sapiente sint quidem
          obcaecati, reiciendis, repudiandae hic voluptatum iste porro illum
          dolorem ipsum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis
          praesentium quam cum saepe quia laborum est sapiente sint quidem
          obcaecati, reiciendis, repudiandae hic voluptatum iste porro illum
          dolorem ipsum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis
          praesentium quam cum saepe quia laborum est sapiente sint quidem
          obcaecati, reiciendis, repudiandae hic voluptatum iste porro illum
          dolorem ipsum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis
          praesentium quam cum saepe quia laborum est sapiente sint quidem
          obcaecati, reiciendis, repudiandae hic voluptatum iste porro illum
          dolorem ipsum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis
          praesentium quam cum saepe quia laborum est sapiente sint quidem
          obcaecati, reiciendis, repudiandae hic voluptatum iste porro illum
          dolorem ipsum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis
          praesentium quam cum saepe quia laborum est sapiente sint quidem
          obcaecati, reiciendis, repudiandae hic voluptatum iste porro illum
          dolorem ipsum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis
          praesentium quam cum saepe quia laborum est sapiente sint quidem
          obcaecati, reiciendis, repudiandae hic voluptatum iste porro illum
          dolorem ipsum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis
          praesentium quam cum saepe quia laborum est sapiente sint quidem
          obcaecati, reiciendis, repudiandae hic voluptatum iste porro illum
          dolorem ipsum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis
          praesentium quam cum saepe quia laborum est sapiente sint quidem
          obcaecati, reiciendis, repudiandae hic voluptatum iste porro illum
          dolorem ipsum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis
          praesentium quam cum saepe quia laborum est sapiente sint quidem
          obcaecati, reiciendis, repudiandae hic voluptatum iste porro illum
          dolorem ipsum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis
          praesentium quam cum saepe quia laborum est sapiente sint quidem
          obcaecati, reiciendis, repudiandae hic voluptatum iste porro illum
          dolorem ipsum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis
          praesentium quam cum saepe quia laborum est sapiente sint quidem
          obcaecati, reiciendis, repudiandae hic voluptatum iste porro illum
          dolorem ipsum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis
          praesentium quam cum saepe quia laborum est sapiente sint quidem
          obcaecati, reiciendis, repudiandae hic voluptatum iste porro illum
          dolorem ipsum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis
          praesentium quam cum saepe quia laborum est sapiente sint quidem
          obcaecati, reiciendis, repudiandae hic voluptatum iste porro illum
          dolorem ipsum!
        </p>
        <h1 id="sponsor_1">Sponsors</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis
          praesentium quam cum saepe quia laborum est sapiente sint quidem
          obcaecati, reiciendis, repudiandae hic voluptatum iste porro illum
          dolorem ipsum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis
          praesentium quam cum saepe quia laborum est sapiente sint quidem
          obcaecati, reiciendis, repudiandae hic voluptatum iste porro illum
          dolorem ipsum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis
          praesentium quam cum saepe quia laborum est sapiente sint quidem
          obcaecati, reiciendis, repudiandae hic voluptatum iste porro illum
          dolorem ipsum!
        </p>
        <h1 id="sponsor_2">Sponsors</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis
          praesentium quam cum saepe quia laborum est sapiente sint quidem
          obcaecati, reiciendis, repudiandae hic voluptatum iste porro illum
          dolorem ipsum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis
          praesentium quam cum saepe quia laborum est sapiente sint quidem
          obcaecati, reiciendis, repudiandae hic voluptatum iste porro illum
          dolorem ipsum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis
          praesentium quam cum saepe quia laborum est sapiente sint quidem
          obcaecati, reiciendis, repudiandae hic voluptatum iste porro illum
          dolorem ipsum!
        </p>
        <h1>Sponsors</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis
          praesentium quam cum saepe quia laborum est sapiente sint quidem
          obcaecati, reiciendis, repudiandae hic voluptatum iste porro illum
          dolorem ipsum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis
          praesentium quam cum saepe quia laborum est sapiente sint quidem
          obcaecati, reiciendis, repudiandae hic voluptatum iste porro illum
          dolorem ipsum!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat omnis
          praesentium quam cum saepe quia laborum est sapiente sint quidem
          obcaecati, reiciendis, repudiandae hic voluptatum iste porro illum
          dolorem ipsum!
        </p> */}
      </div>
    </div>
  );
}

export default Sponsors;
