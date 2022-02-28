import "./navbar.css";



export default function NavBar() {
  return (
    <div className="nav">

        <div className="topLeft">
          <i class="fa-brands fa-facebook-square"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-github-square"></i>
        </div>

        <div className="topCenter">
          <ul className="navList">
            <li className="navListItem">Home</li>
            <li className="navListItem">About</li>
            <li className="navListItem">Portfolio</li>
            <li className="navListItem">Write</li>
            <li className="navListItem">Log Out</li>
          </ul>
        </div>  

        <div className="topRight">

          
          <i class="fas fa-search"></i>
        </div>

    </div>
  )
}
