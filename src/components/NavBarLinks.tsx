interface Props {
  links: {
    linkName: string;
    link: string;
  }[];
}

const NavBarLinks = ({ links }: Props) => {
  return (
    <ul className="navbar-nav ms-auto me-5">
      {links.map((link, index) => (
        <li className="nav-item" key={index}>
          <a
            className="nav-link active"
            aria-current="page"
            href={link.link}
            onClick={() => console.log(link.linkName)}
          >
            {link.linkName}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavBarLinks;
