import { menuItems } from "./MenuItems";
import MenuItems from './MenuItems';

const Navbar = () => {
    return (
      <nav>
        <ul className="menus">
            {menuItems.map((menu,index) => {
              return <MenuItems items={menu} key={index} />
            })}
        </ul>
      </nav>
    );
  };
  
  export default Navbar;