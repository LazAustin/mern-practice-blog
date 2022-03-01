import React from 'react';
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebarItem'>
          <span className='sidebarTitle'>About Me</span>
          <img className='sidebarImg' src={require('../navbar/WebsitePic.jpg')} alt=""/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque minus quibusdam maiores unde veritatis ratione illo quos non.
          </p>
        </div>
        <div className='sidebarItem'>
          <span className='sidebarTitle'>Categories</span>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>Life</li>
            <li className='sidebarListItem'>Music</li>
            <li className='sidebarListItem'>Style</li>
            <li className='sidebarListItem'>Sport</li>
            <li className='sidebarListItem'>Tech</li>
            <li className='sidebarListItem'>Cinema</li>
          </ul>
        </div>
        <div className='sidebarItem'>
          <span className='sidebarTitle'>FOLLOW US</span>
          <div className='sidebarSocial'>
          <i className="sidebarIcon fa-brands fa-github-square"></i>
          <i className="sidebarIcon fa-brands fa-linkedin"></i>
          <i className="sidebarIcon fa-brands fa-facebook-square"></i>
          </div>
        </div>
         
    </div>
  )
}
