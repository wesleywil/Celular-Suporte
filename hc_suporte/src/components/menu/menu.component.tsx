import { useNavigate, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Menu = () => {
  const navigate = useNavigate();

  const handleMenu = () => {
    var x = document.getElementById("myLinks");
    if (x?.style.display === "block") {
      x.style.display = "none";
    } else {
      x!.style.display = "block";
    }
  };
  return (
    <div className="topnav z-20">
      <button
        onClick={handleMenu}
        className="text-2xl text-white bg-[#4b9978] px-2 py-1"
      >
        {" "}
        <GiHamburgerMenu />
      </button>
      <div id="myLinks">
        <Link to="/">Home</Link>
        <Link to="/registrar">Registrar</Link>
        <Link to="/problema">Problema</Link>
        <Link to="/ordem_servicos">Order de Serviços</Link>
      </div>
    </div>
  );
};

export default Menu;
