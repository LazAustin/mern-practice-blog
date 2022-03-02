import "./settings.css"
import Sidebar from "../../components/sidebar/sidebar"

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsUpdateTitle">Delete Your Account</span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img src={require('../../components/header/ZachBrittLogo.jpg')} alt=''/>
                    <label htmlFor="fileInput">
                        <i className="settingsPPIcon fa-regular fa-user"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder="Some Name"/>
                <label>Email</label>
                <input type="email" placeholder="YourEmail@gmail.com"/>
                <label>Password</label>
                <input type="password" placeholder="Password"/>
                <button className="settingsButton">Update</button>
            </form>
        </div>
        <Sidebar />
    </div>
  )
}
