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
                        menu={menuItem} isOpen={openMenu === menuItem.label} 
                        onToggle={handleToggle}/>
                    ) : (
                        <MenuItem key={index} 
                            label={menuItem.label} 
                            icon={menuItem.icon} 
                            path={menuItem.path}
                            hasChildren={menuItem.hasChildren}
                            onClick={() => handleToggle(menuItem.label)}
                            isOpen={openMenu === menuItem.label}
                        />
                    );
                })}
          
        </div>
    )
}

export default SideBar;