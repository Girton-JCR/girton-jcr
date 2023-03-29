import {
  AppBar,
  Button,
  MenuItem,
  MenuList,
  Toolbar,
  styled,
} from '@mui/material';
import React from 'react';

import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import { Link } from 'react-router-dom';
import DropDown from './DropDown';

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
  fontSize: '68px',
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

export default function SiteHeader(props: Props) {
  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <StyledAppBar>
          <TitleBar>Girton College JCR</TitleBar>
          <NavLinkBar variant="dense">
            <Button>
              <ButtonText to="/">Home</ButtonText>
            </Button>
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
            <Button>
              <ButtonText to="/welfare">Welfare</ButtonText>
            </Button>
            <Button>
              <ButtonText to="/societies-list">Societies</ButtonText>
            </Button>
          </NavLinkBar>
        </StyledAppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
