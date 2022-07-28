import "./styles.css";
import logo from "../../assets/NuKenzie.png";
function Header() {
  return (
    <header className="headerNuKenzie">
      <img src={logo} alt="" className="logoNuKezie" />
      <button className="buttonHeader">Inicio</button>
    </header>
  );
}
export default Header;
