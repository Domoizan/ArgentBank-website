/**
 * @param  {[{lnk:"String",txt:"string",icone:"string"}]} lnks
 * @returns {HTMLCollection} liens de navigation 
 */
const Menu = ({lnks}) =>{
    return (
        <>
            {
                lnks.map((lnk,idx)=>(
                    <a className="main-nav-item" href={lnk.lnk} key={`lnk_${idx}`}>
                        <i className={lnk.icone}></i>
                        {lnk.txt}
                    </a>
                    )
                )
            }
        </>
    )
}

export default Menu