import * as React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuButton} from '@mui/base/MenuButton';
import { MenuItem, menuItemClasses } from '@mui/base/MenuItem';
import MenuIntroduction from './AccountBar';

const MenuBar = ({ navBarLinks, currentUser }) => {
    const linkArray = navBarLinks.map((navLink) => (
        <MenuItem className="menu_dropdown" key={navLink.linkName}>
            <Link to={navLink.linkTo}>{navLink.linkName}</Link>
        </MenuItem>
    ));

    return (
        <Dropdown>
            <MenuButton className='nav__button'>
                <i className="ri-menu-line" aria-label="Menu Icon"></i>
            </MenuButton>
            <Menu slots={{ listbox: 'ol' }}>
                {linkArray}
            </Menu>
        </Dropdown>
    );
};

export default MenuBar;