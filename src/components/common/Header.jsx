import { Link } from "react-router-dom";
import { logo } from "../../utils/images";
import { Navbar, Searchbar } from "../common/index";

const Header = () => {
  return (
    <header>
      <div className="navbar-brand-wrapper"> 
        <div className="container">
          <Link to="/" className="flex items-center navbar-brand">
            <img src={logo} alt="site logo" width={60} />
            <p className="navbar-brand-text">
              Search for <span className="text-orange font-handlee ">Recipe.</span>
            </p>
          </Link>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container">
          <Navbar />
          <Searchbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
