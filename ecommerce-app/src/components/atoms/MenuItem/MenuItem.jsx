
import Button from '../Button/Button.jsx';
import {NavLink} from 'react-router-dom';
function MenuItem({ label,icon:Icon,path,hasChildren,onClick,isOpen }) {

    const content=(
        <>
        <span>
            {Icon && <span className="menu-item-icon"><Icon /></span>}
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