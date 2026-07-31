//create sidebar using sidebar menu and menu item
import {menuData} from '../../../data/menuData';
import { useState } from 'react';
import SideBarMenuItem from '../molecules/SideBarMenu/SideBarMenu';
import MenuItem from '../molecules/MenuItem/MenuItem';
function SideBar() {
    const [openMenu, setOpenMenu] = useState('Orders');
    const handleToggle = (menuName) => {
        setOpenMenu(menuName);
    };

    return(
        <div className="sidebar">
           
                {menuData.map((menuItem, index) => {
                    return menuItem.children ? (
                        <SideBarMenuItem key={index} 
                        menuItem={menuItem} openMenu={openMenu} 
                        onToggle={handleToggle}/>
                    ) : (
                        <MenuItem key={index} menuItem={menuItem} />
                    );
                })}
          
        </div>
    )
}

export default SideBar;