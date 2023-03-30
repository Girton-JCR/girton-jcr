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
import React, { useEffect, useState } from 'react';

import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { Link, useLocation } from 'react-router-dom';
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
  justifyContent: 'center',
});

const TitleBar = styled(Toolbar)({
  paddingBottom: '0px',
});

const Title = styled(Typography)({
  fontSize: '68px',
  fontFamily: 'Poppins',
  color: 'white',
  '@media (width < 1000px)': {
    fontSize: '50px',
  },
  '@media (width < 700px)': {
    fontSize: '30px',
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
  color: 'white',
  textDecoration: 'none',
  fontFamily: 'Poppins',
  textTransform: 'none',
  fontSize: '16px',
});

const ButtonLink = styled(Link)({
  display: 'flex',
  flexGrow: '1',
  textDecoration: 'none',
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

const NavBox = styled(Box)({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'row',
  '@media (width <= 700px)': {
    position: 'fixed',
    top: '0',
    backgroundColor: '#154732',
    flexDirection: 'column',
    width: '100%',
    height: 'calc(100% - 48px)',
    flexGrow: 1,
    overflowY: 'scroll',
  },
});

const SocialBox = styled(Box)({
  width: '128px',
  justifyContent: 'center',
  display: 'flex',
  '@media (width <= 700px)': {
    flexDirection: 'row',
    backgroundColor: '#154732',
    height: '48px',
    position: 'fixed',
    bottom: '0',
    width: '100%',
  },
});

const HamburgerTitle = styled(Box)({
  margin: '0 15px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

interface NavProps {
  setMenuOpen: (set: boolean) => void;
}

function NavMenu(props: NavProps) {
  const win = useWindowDimensions();
  return (
    <>
      <NavBox>
        {win.width <= 700 && (
          <HamburgerTitle>
            <Title sx={{ flexGrow: 1 }}>Girton College JCR</Title>
            <img
              src={'/menu-close.svg'}
              style={{ filter: 'invert(100%)' }}
              height="36px"
              onClick={() => props.setMenuOpen(false)}
            />
          </HamburgerTitle>
        )}
        <ButtonLink to="/">
          <MenuButton>Home</MenuButton>
        </ButtonLink>
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
        <ButtonLink to="/welfare">
          <MenuButton>Welfare</MenuButton>
        </ButtonLink>
        <ButtonLink to="/societies-list">
          <MenuButton>Societies</MenuButton>
        </ButtonLink>
      </NavBox>
      <SocialBox>
        <a
          href="https://www.facebook.com/GirtonJCR"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/Facebook.svg" height="24px" style={{ display: 'flex' }} />
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
      </SocialBox>
    </>
  );
}

export default function SiteHeader(props: Props) {
  const win = useWindowDimensions();
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <React.Fragment>
      <>
        {(win.width > 700 || !menuOpen) && (
          <>
            <HideOnScroll {...props}>
              <StyledAppBar>
                <TitleBar>
                  <Title sx={{ flexGrow: 1 }}>Girton College JCR</Title>
                  {win.width > 700 && <img src="/logo.jpg" height="128px" />}
                  {win.width <= 700 && (
                    <img
                      src={'/menu-icon.svg'}
                      style={{ filter: 'invert(100%)' }}
                      height="36px"
                      onClick={() => setMenuOpen(true)}
                    />
                  )}
                </TitleBar>
                {win.width > 700 && (
                  <NavLinkBar variant="dense">
                    <NavMenu setMenuOpen={setMenuOpen} />
                  </NavLinkBar>
                )}
              </StyledAppBar>
            </HideOnScroll>
            <Toolbar />
          </>
        )}
        {win.width <= 700 && menuOpen && <NavMenu setMenuOpen={setMenuOpen} />}
      </>
    </React.Fragment>
  );
}
