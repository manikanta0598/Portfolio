import "./Topbar.scss";
import { Call, Email } from "@mui/icons-material";

export default function Topbar({ open, setOpen }) {
  return (
    <div className={open ? "topbar" : "topbar active"}>
      <div className="left">
        <a href="#intro">Mani</a>
        <div className="info">
          <div className="phone">
            <Call className="icon" />
            <span className="i-text">(343)-349-9242</span>
          </div>
          <div className="mail">
            <Email className="icon" />
            <span className="i-text">manikcareer18@gmail.com</span>
          </div>
        </div>
      </div>

      <div className="right">
        <div className="hamburger" onClick={() => setOpen(!open)}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
      </div>
    </div>
  );
}
