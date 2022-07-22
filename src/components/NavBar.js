import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const navElements = links.map(value => {
    return <a key={value} href={"#" + value}>{value}</a>
  });

  return ( 
  <nav>
    {navElements}
  </nav>
  );
} 


export default NavBar;
