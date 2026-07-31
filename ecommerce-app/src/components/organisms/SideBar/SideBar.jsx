//create sidebar using sidebar menu and menu item
import {menuData} from '../../../data/menuData';
import { useState } from 'react';
import SideBarMenu from '../../molecules/SideBarMenu/SideBarMenu';
import MenuItem from '../../atoms/MenuItem/MenuItem';
function SideBar() {
    const [openMenu, setOpenMenu] = useState('orders');
    const handleToggle = (menuId) => { setOpenMenu((current) => (current === menuId ? null : menuId)); };

    return(
        <nav className="sidebar-navigation font-bold text-1xl" aria-label="Main navigation">
           
                {menuData.map((menuItem) => {
                    return menuItem.children ? (
                        <SideBarMenu key={menuItem.id} 
                        isOpen={openMenu === menuItem.id} 
                        onToggle={handleToggle} menu={menuItem}/>
                    ) : (
                        <MenuItem key={menuItem.id}{...menuItem}
                            
                        />
                    );
                })}
          
        </nav>
    )
}

export default SideBar;