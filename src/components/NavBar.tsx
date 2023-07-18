import NavBarLinks from "./NavBarLinks";

let links = [
  {
    linkName: "Home",
    link: "#",
  },
  {
    linkName: "Projects",
    link: "#",
  },
  {
    linkName: "Github",
    link: "#",
  },
];

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand sticky-top mt-4">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarText">
          <NavBarLinks links={links}></NavBarLinks>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
