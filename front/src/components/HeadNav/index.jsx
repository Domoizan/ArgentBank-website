

import Menu from "../Menu"
/**
 * @param  {[{lnk:"String",txt:"string",icone:"string"}]} lnks
 * @returns {HTMLCollection} liens de navigation 
 */
const HeadNav = ({lnks})=>{
    return (
        <nav className="main-nav">
      <a className="main-nav-logo" href="./index.html">
        <img
          className="main-nav-logo-image"
          src="./img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        <Menu lnks={lnks}/>
      </div>
    </nav>
    )
}

export default HeadNav