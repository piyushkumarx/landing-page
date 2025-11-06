import "./footer.css";
import Footerpart from "./footerPart";

function Footer() {
  return (
    <div className="box">
      <div className="headbox">
        <img id="footerlogo" src="/logo.svg" alt="Logo" />

        <div className="social-icons">
          <img src="/icon-facebook.svg" alt="Facebook" />
          <img className="img" src="/icon-twitter.svg" alt="Twitter" />
          <img className="img" src="/icon-pinterest.svg" alt="Pinterest" />
          <img  className="img" src="/icon-instagram.svg" alt="Instagram" />
        </div>
      </div>

      <hr id="hrFooter" />

      <Footerpart />

     
    </div>
  );
}

export default Footer;
