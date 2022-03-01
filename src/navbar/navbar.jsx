import "./navbar.css";




export default function NavBar() {
  return (
    <div className="nav">

        <div className="navLeft">
          <i className="navIcon fa-brands fa-github-square"></i>
          <i className="navIcon fa-brands fa-linkedin"></i>
          <i className="navIcon fa-brands fa-facebook-square"></i>
        </div>

        <div className="navCenter">
          <ul className="navList">
            <li className="navListItem">Home</li>
            <li className="navListItem">About</li>
            <li className="navListItem">Portfolio</li>
            <li className="navListItem">Write</li>
            <li className="navListItem">Log Out</li>
          </ul>
        </div>

        <div className="navRight">

          <img className="navImg" src={require('./WebsitePic.jpg')} alt=""/>
          <i className="navSearchIcon fas fa-search"></i>
        
        </div>

    </div>
  )
}
