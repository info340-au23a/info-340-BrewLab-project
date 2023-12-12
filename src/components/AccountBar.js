import * as React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuButton} from '@mui/base/MenuButton';
import { MenuItem } from '@mui/base/MenuItem';
import { getAuth, signOut } from 'firebase/auth';

export default function MenuIntroduction(props) {

  const handleSignOut = (event) => {
    signOut(getAuth());
  }

  return (
    <Dropdown>
      <MenuButton className='nav__button' >Account</MenuButton>
      <Menu slots={{ listbox: 'ol' }}>
        <MenuItem className='menu_dropdown'>
          {props.currentUser ? (
            <Link to="/account">Profile</Link>
          ) : (
            <Link to="/signin">Profile</Link>
          )}
        </MenuItem>
        <MenuItem onClick={handleSignOut} className='menu_dropdown'>Log out</MenuItem>
      </Menu>
    </Dropdown>
  );
}
