import "./menu.scss";
export default function Menu({ open, setOpen }) {
  return (
    <div className={open ? "mainMenu" : "mainMenu active"}>
      <a href="#intro" onClick={() => setOpen(true)}>
        About
      </a>
      <a href="#portfolio " onClick={() => setOpen(true)}>
        Projects
      </a>
      <a href="#contact" onClick={() => setOpen(true)}>
        Contact
      </a>
    </div>
  );
}
