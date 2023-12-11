import * as React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuButton} from '@mui/base/MenuButton';
import { MenuItem, menuItemClasses } from '@mui/base/MenuItem';
import { getAuth, signOut } from 'firebase/auth';

export default function MenuIntroduction(props) {
  const createHandleMenuClick = (menuItem) => {
    return () => {
      console.log(`Clicked on ${menuItem}`);
    };
  };

  const handleSignOut = (event) => {
    signOut(getAuth());
  }

  return (
    <Dropdown>
      <MenuButton className='nav__button' >Account</MenuButton>
      <Menu slots={'ul'}>
        <MenuItem>
          {props ? (
            <Link to="/account">Profile</Link>
          ) : (
            <Link to="/signin">Profile</Link>
          )}
        </MenuItem>
        <MenuItem onClick={handleSignOut}>Log out</MenuItem>
      </Menu>
    </Dropdown>
  );
}



// {props ? (
//   <Link to="/account">
//           <MenuItem onClick={createHandleMenuClick('Profile')}>Profile</MenuItem>
//         </Link>
//   ) : (
//     <Link to="signin">
//     <MenuItem onClick={createHandleMenuClick('Profile')}>Profile</MenuItem>
//   </Link>
// )}
// <Menu slots={{ listbox: 'ol' }} />

// const Listbox = styled('ul')(
//   ({ theme }) => `
//   font-family: 'IBM Plex Sans', sans-serif;
//   font-size: 0.875rem;
//   box-sizing: border-box;
//   padding: 6px;
//   margin: 12px 0;
//   min-width: 200px;
//   border-radius: 12px;
//   overflow: auto;
//   outline: 0px;
//   background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
//   border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
//   color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
//   box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
//   z-index: 1;
//   `,
// );

// const MenuItem = (BaseMenuItem)(
//   ({ theme }) => `
//   list-style: none;
//   padding: 8px;
//   border-radius: 8px;
//   cursor: default;
//   user-select: none;

//   &:last-of-type {
//     border-bottom: none;
//   }

//   &.${menuItemClasses.focusVisible} {
//     outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
//     background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
//     color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
//   }

//   &.${menuItemClasses.disabled} {
//     color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
//   }

//   &:hover:not(.${menuItemClasses.disabled}) {
//     background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[50]};
//     color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
//   }
//   `,
// );

// const MenuButton = styled(BaseMenuButton)(
//   ({ theme }) => `
//   font-family: 'IBM Plex Sans', sans-serif;
//   font-weight: 600;
//   font-size: 0.875rem;
//   line-height: 1.5;
//   padding: 8px 16px;
//   border-radius: 8px;
//   color: white;
//   transition: all 150ms ease;
//   cursor: pointer;
//   background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
//   border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
//   color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
//   box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

//   &:hover {
//     background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
//     border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
//   }

//   &:active {
//     background: ${theme.palette.mode === 'dark' ? grey[700] : grey[100]};
//   }

//   &:focus-visible {
//     box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
//     outline: none;
//   }
//   `,
// );