import {menuData} from '../../../data/menuData';
import {adminMenuData} from '../../../data/adminMenuData';

import SideBarMenu from '../../molecules/SideBarMenu/SideBarMenu';
import {useState} from 'react';
import MenuItem from '../../atoms/MenuItem/MenuItem';
import {useAuth} from '../../../contexts/AuthContext';
function SideBar() {
     const [openMenu, setOpenMenu] = useState('masters');
    const handleToggle = (menuId) => { setOpenMenu((current) => (current === menuId ? null : menuId)); };
     const { user } = useAuth();
    if(user === 'admin'){
        return (
<aside className="sidebar">
      <nav
        className="sidebar-navigation font-bold text-xl"
        aria-label="Main navigation"
      >
           
                {adminMenuData.map((menuItem) => {
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
        </aside>
        )
    }
    return (
        <aside className="sidebar">
      <nav
        className="sidebar-navigation font-bold text-xl"
        aria-label="Main navigation"
      >
           
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
        </aside>
    );
}

export default SideBar;