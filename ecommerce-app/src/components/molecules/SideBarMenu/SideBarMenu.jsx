//create SideBarMenu component from MenuItem
import MenuItem from '../atoms/MenuItem/MenuItem';
function SideBarMenu() {
    return(
        <div className="sidebar-menu">
            <MenuItem label="Home" icon="🏠" path="/" />
        </div>
    )

}