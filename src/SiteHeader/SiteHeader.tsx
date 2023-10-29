import {
  AppBar,
  Box,
  Button,
  MenuItem,
  MenuList,
  Toolbar,
  styled,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import './SiteHeader.css';
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

const HamburgerTitle = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '0 15px',
});

interface NavProps {
  setMenuOpen: (set: boolean) => void;
}

function NavMenu(props: NavProps) {
  const win = useWindowDimensions();
  return (
    <>
      <div className="NavBox">
        {win.width <= 700 && (
          <HamburgerTitle>
            <div style={{ flexGrow: 1 }}>
              <img
                className="HeaderText"
                src="/header-text.svg"
                width={'100%'}
              />
            </div>
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
      </div>
      <div className="SocialBox">
        <a
          href="https://www.facebook.com/GirtonJCR"
          target="_blank"
          rel="noreferrer"
          style={{ display: 'flex' }}
        >
          <img src="/Facebook.svg" height="24px" />
        </a>
        <a
          href="https://www.instagram.com/girtonjcr/"
          target="_blank"
          rel="noreferrer"
          style={{ marginLeft: '10px', display: 'flex' }}
        >
          <img src="/Instagram.svg" height="24px" />
        </a>
      </div>
    </>
  );
}

export default function SiteHeader(props: Props) {
  const win = useWindowDimensions();
  const [menuOpen, setMenuOpen] = useState(false);
  // use this to display an important notice in the header on all pages.
  const [showBanner, setShowBanner] = useState(false);

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
                  <div style={{ flexGrow: 1 }}>
                    <img
                      className="HeaderText"
                      src="/header-text.svg"
                      width={'100%'}
                    />
                  </div>
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
                {showBanner && (
                  <>
                    <div
                      className={`Banner open`}
                      style={{
                        backgroundColor: '#3a6b54',
                        flexDirection: 'row',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '0px 10px',
                      }}
                    >
                      <p style={{ marginTop: 0 }}>
                        Are you an incoming fresher? Be sure to follow
                        Girton&apos;s dedicated Instagram for Freshers&apos;
                        Week 2023!{' '}
                        <a
                          href="https://www.instagram.com/girtonfreshers2023/"
                          target="_blank"
                          rel="noreferrer"
                          style={{ color: '#ffffff' }}
                        >
                          @girtonfreshers2023
                        </a>
                      </p>
                      <img
                        src={'/menu-close.svg'}
                        style={{ filter: 'invert(100%)', marginLeft: 'auto' }}
                        height="36px"
                        onClick={() => setShowBanner(false)}
                      />
                    </div>
                  </>
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
