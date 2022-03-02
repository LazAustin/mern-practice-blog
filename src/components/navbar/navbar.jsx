import "./navbar.css";
import { Link } from "react-router-dom";




export default function NavBar() {
  const user = true;
  return (
    <div className="nav">

        <div className="navLeft">
          <i className="navIcon fa-brands fa-github-square"></i>
          <i className="navIcon fa-brands fa-linkedin"></i>
          <i className="navIcon fa-brands fa-facebook-square"></i>
        </div>

        <div className="navCenter">
          <ul className="navList">
            <li className="navListItem"><Link className="link" to="/">HOME</Link></li>
            <li className="navListItem"><Link className="link" to="/">ABOUT</Link></li>
            <li className="navListItem"><Link className="link" to="/">CONTACT</Link></li>
            <li className="navListItem"><Link className="link" to="/write">WRITE</Link></li>
            <li className="navListItem"><Link className="link" to="/">{user && "LOGOUT"}</Link></li>
          </ul>
        </div>

        <div className="navRight">
          {
            user ? (
              <>
                <img className="navImg" src={require('./WebsitePic.jpg')} alt=""/>
                <i className="navSearchIcon fas fa-search"></i>
              </>
            ) : (
              <ul className="navList">
                <li className="navListItem"><Link className="link" to="/login">LOGIN</Link></li>
                <li className="navListItem"><Link className="link" to="/register">REGISTER</Link></li>
                <i className="navSearchIcon fas fa-search"></i>
              </ul>
            )}
        </div>

    </div>
  )
}
