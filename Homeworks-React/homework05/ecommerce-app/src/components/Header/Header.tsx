import { NavLink, Link } from "react-router-dom";
import "./Header.css";
import icon from "../../assets/icon.png";
export const Header = () => {
  return (
    <div className="headerContainer">
      <header className="header">
        <div className="logo">
          <Link to="/">
            <img src={icon} alt="logo" className="logo" />
          </Link>
        </div>

        <nav>
          <ul className="nav-list">
            <NavLink
              to="/"
              className={({isActive})=>{
                if(isActive){
                    return "active"
                }
                return "pending"
            }}
              >
              <li>Home</li>
            </NavLink>

            <NavLink to="/addProduct" className={({isActive})=>{
                if(isActive){
                    return "active"
                }
                return "pending"
            }}>
              <li>Add Product</li>
            </NavLink>
          </ul>
        </nav>
      </header>
    </div>
  );
};
