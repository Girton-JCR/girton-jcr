import {
  AppBar,
  Box,
  Button,
  MenuItem,
  MenuList,
  Toolbar,
  Typography,
  styled,
} from '@mui/material';
import React, { useState } from 'react';

import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { Link } from 'react-router-dom';
import DropDown from './DropDown';
import useWindowDimensions from '../useWindowDimensions';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

const SMenuItem = styled(MenuItem)({
  fontFamily: 'Poppins',
});

const TitleBar = styled(Toolbar)({
  paddingBottom: '0px',
});

const Title = styled(Typography)({
  fontSize: '68px',
  fontFamily: 'Poppins',
  '@media (width < 1000px)': {
    fontSize: '50px',
  },
  '@media (width < 700px)': {
    fontSize: '36px',
  },
});

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#154732',
  fontFamily: 'Poppins',
});

const NavLinkBar = styled(Toolbar)({
  minHeight: '0px',
});

const ButtonText = styled(Link)({
  color: 'white',
  textDecoration: 'none',
  fontFamily: 'Poppins',
  textTransform: 'none',
});

export const MenuButton = styled(Button)({
  display: 'flex',
  flexGrow: '1',
  textAlign: 'left',
});

function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function NavMenu() {
  return (
    <>
      <MenuButton className="Button">
        <ButtonText to="/">Home</ButtonText>
      </MenuButton>
      <DropDown name={'JCR Committee'}>
        <MenuList>
          <ButtonText to="/what-is-the-JCR">
            <SMenuItem>What is the JCR?</SMenuItem>
          </ButtonText>
          <ButtonText to="/JCR-news">
            <SMenuItem>JCR News</SMenuItem>
          </ButtonText>
          <ButtonText to="/meet-the-committee">
            <SMenuItem>Meet the Committee</SMenuItem>
          </ButtonText>
        </MenuList>
      </DropDown>
      <DropDown name={'College Life'}>
        <MenuList>
          <ButtonText to="/accommodation">
            <SMenuItem>Accommodation</SMenuItem>
          </ButtonText>
          <ButtonText to="/booking-facilities">
            <SMenuItem>Booking Facilities</SMenuItem>
          </ButtonText>
          <ButtonText to="/catering">
            <SMenuItem>Catering</SMenuItem>
          </ButtonText>
          <ButtonText to="/clubs-and-societies">
            <SMenuItem>Clubs & Societies</SMenuItem>
          </ButtonText>
          <ButtonText to="/freshers">
            <SMenuItem>Freshers</SMenuItem>
          </ButtonText>
          <ButtonText to="/it-resources">
            <SMenuItem>IT Resources</SMenuItem>
          </ButtonText>
          <ButtonText to="/transport">
            <SMenuItem>Transport</SMenuItem>
          </ButtonText>
          <ButtonText to="/events-calendar">
            <SMenuItem>Events Calendar</SMenuItem>
          </ButtonText>
        </MenuList>
      </DropDown>
      <MenuButton>
        <ButtonText to="/welfare">Welfare</ButtonText>
      </MenuButton>
      <MenuButton>
        <ButtonText to="/societies-list">Societies</ButtonText>
      </MenuButton>
    </>
  );
}

export default function SiteHeader(props: Props) {
  const win = useWindowDimensions();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <React.Fragment>
      <>
        <HideOnScroll {...props}>
          <StyledAppBar>
            <TitleBar>
              <Title sx={{ flexGrow: 1 }}>Girton College JCR</Title>
              {win.width > 700 && <img src="/logo.jpg" height="128px" />}
              {win.width <= 700 && (
                <img
                  src={menuOpen ? '/menu-close.svg' : '/menu-icon.svg'}
                  style={{ filter: 'invert(100%)' }}
                  height="36px"
                  onClick={() => setMenuOpen(!menuOpen)}
                />
              )}
            </TitleBar>
            {win.width > 700 && (
              <NavLinkBar variant="dense">
                <Box
                  sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'row',
                  }}
                >
                  <NavMenu />
                </Box>
                <Box
                  sx={{
                    width: '128px',
                    justifyContent: 'center',
                    display: 'flex',
                  }}
                >
                  <a
                    href="https://www.facebook.com/GirtonJCR"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="/Facebook.svg"
                      height="24px"
                      style={{ display: 'flex' }}
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/girtonjcr/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="/Instagram.svg"
                      height="24px"
                      style={{ marginLeft: '10px', display: 'flex' }}
                    />
                  </a>
                </Box>
              </NavLinkBar>
            )}
          </StyledAppBar>
        </HideOnScroll>
        <Toolbar />
      </>
    </React.Fragment>
  );
}
