import {menuData} from '../../../data/menuData';
import SideBarMenu from '../../molecules/SideBarMenu/SideBarMenu';
import {useState} from 'react';
import MenuItem from '../../atoms/MenuItem/MenuItem';

function SideBar() {
     const [openMenu, setOpenMenu] = useState('masters');
    const handleToggle = (menuId) => { setOpenMenu((current) => (current === menuId ? null : menuId)); };

    return (
        <aside className="w-72 min-h-[calc(100vh-180px)] shrink-0  bg-white">
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