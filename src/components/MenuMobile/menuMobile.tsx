import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store/store';
import styles from '../Navigate/Navigate.module.scss';
import MenuItem from '@mui/material/MenuItem';

const ITEM_HEIGHT = 48;

const MenuMobile: FC = () => {
  const navigate = useNavigate();
	const {items} = useSelector((state: RootState) => state.addData);
	const DataNavigation = items?.content.rendered.split('{~*~}');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOnHome = () => {
    navigate('/');
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        color='inherit'
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        disableScrollLock={true}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>
          <a className={styles.item_mobile} href="#about" onClick={handleOnHome}>{DataNavigation?.[3]}</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
         <a className={styles.item_mobile} href="#services" onClick={handleOnHome}>{DataNavigation?.[5]}</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a className={styles.item_mobile} href="#terminals" onClick={handleOnHome}>{DataNavigation?.[7]}</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a className={styles.item_mobile} href="#projects">{DataNavigation?.[9]}</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a className={styles.item_mobile} href="#contacts">{DataNavigation?.[11]}</a>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default MenuMobile;
