
import Button from '../Button/Button.jsx';
import {NavLink} from 'react-router-dom';
function MenuItem({ label,icon:Icon,path,hasChildren,onClick,isOpen }) {

    const content=(
        <>
        <div className="flex items-center gap-2">
        <span className="flex items-center gap-2">
            {Icon && <span className="menu-item-icon"><Icon /></span>}
            <span className="menu-item-label">{label}</span>
        </span>
        {hasChildren && <span className="menu-item-arrow">{isOpen ? '▼' : '▶'}
            </span>}
           
        </div>
        </>
    )

    if(hasChildren) {
        return (
            <Button type="button" className="menu-item" onClick={onClick}>
                {content}
            </Button>
        )
    }

    return(
        <NavLink to={path} end={path === "/"} className={({ isActive }) => `menu-item menu-link ${isActive ? "menu-item-active" : ""}`}>
            {content}
        </NavLink>
    )

}

export default MenuItem;