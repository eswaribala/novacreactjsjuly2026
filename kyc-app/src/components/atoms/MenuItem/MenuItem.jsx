import Button from '../Button/Button';
import { NavLink } from 'react-router-dom';

function MenuItem({icon:Icon, label,path,hasChildren,onClick,isOpen }) {
  const content=(
    <>
    <div className='flex items-center gap-2  py-2'>
        <span className='text-gray-500 '>
           {Icon && <span className='text-gray-500 '>{<Icon />}</span>}
        </span>
        <span className='text-gray-500 '>{label}</span>
        {hasChildren && <span className="menu-item-arrow">{isOpen ? '▼' : '▶'}
            </span>}
    </div>
    </>
    )

    if(hasChildren){
        return (
           <Button onClick={onClick} className='w-full flex items-center justify-between  px-4 py-2 text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100'>
               {content}
           </Button>
        )
    }

    return(
         <NavLink to={path} end={path === "/"} 
         className={({ isActive }) =>
        `flex w-full items-center px-4 hover:bg-gray-100 ${
          isActive ? "bg-gray-100 text-blue-600" : ""
        }`
      }>
            {content}
        </NavLink>
    )
   
  
}

export default MenuItem;