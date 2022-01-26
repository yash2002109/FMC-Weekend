import { useState, useEffect } from 'react';
import Classes from './MenuItem.module.css';
import { NavLink } from 'react-router-dom';
// import Classes from "./MenuItem.module.css";

function MenuItem({ anchorId, itemName, active }) {
  const [anchorTarget, setAnchorTarget] = useState(null);

  useEffect(() => {
    setAnchorTarget(document.getElementById(anchorId));
  }, [anchorId]);

  function handleClick(e) {
    e.preventDefault();
    // anchorTarget.scrollIntoView({ behavior: "smooth", block: "center" });
    const yOffset = -90;
    const y = anchorTarget.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
    document.getElementById(`#${itemName}`).onClick(() => {
      document.getElementById(`#${itemName}`).style.color = '#FCC907';
    });
    // const yOffset = 0;
    // const y = anchorTarget.getBoundingClientRect().top + yOffset;
    // window.scrollTo({ top: y, behavior: "smooth" });

    //   window.scrollBy(0, -10);
  }

  return (
    <li>
      <NavLink
        to={`#${itemName}`}
        onClick={handleClick}
        activeClassName="target"
        aria-label={`Scroll to ${itemName}`}>
        <h1>{itemName}</h1>
      </NavLink>
    </li>
  );
}

export default MenuItem;
