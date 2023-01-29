import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const AdminMenu = () => {
  const handleMenu = () => {
    var x = document.getElementById("myLinks");
    if (x?.style.display === "block") {
      x.style.display = "none";
    } else {
      x!.style.display = "block";
    }
  };
  return (
    <div className="topnav z-10">
      <button
        onClick={handleMenu}
        className="text-2xl text-white bg-[#4b9978] px-2 py-1"
      >
        {" "}
        <GiHamburgerMenu />
      </button>
      <div id="myLinks">
        <Link to="/admin/clientes">Clientes</Link>
        <Link to="/admin/servicos">Serviços</Link>
      </div>
    </div>
  );
};

export default AdminMenu;
