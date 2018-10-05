import React from 'react';
import '../../styles/topbar.css'
import codaisseurLogo from '../../assets/2269b994e8bbb859f59076f2c7b7b001.png'

export default function TopBar(props) {
  return (
    <div className="topBar">
      <div className="btn_logo_logo-size">
      <a href="https://codaisseur.com/become-a-developer">
        <img src={codaisseurLogo} alt="codaisseur logo"/>
      </a>
      </div>
      <div className='btn_pageTitle_title-size'>
        <div className='btn_pageTitle_title-color'>
          <h1>Welcome to Codaisseur</h1>
        </div>
      </div>
    </div>
  )
}
