
import Button from '../Button/Button';
import {NavLink} from 'react-router-dom';
function MenuItem({ label,icon,path,hasChildren,onClick,isOpen }) {

    const content=(
        <>
        <span>
            {icon && <span className="menu-item-icon">{icon}</span>}
            <span className="menu-item-label">{label}</span>
        </span>
        {hasChildren && <span className="menu-item-arrow">{isOpen ? '▼' : '▶'}
            </span>}
        </>
    )

    if(hasChildren) {
        return (
            <Button className="menu-item" onClick={onClick}>
                {content}
            </Button>
        )
    }

    return(
        <NavLink to={path} className="menu-item">
            {content}
        </NavLink>
    )

}

export default MenuItem;