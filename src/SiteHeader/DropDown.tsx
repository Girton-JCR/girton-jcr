import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import { styled } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import useWindowDimensions from '../useWindowDimensions';

interface Props {
  children: React.ReactElement;
  name: string;
}

const Background = styled(Paper)({
  backgroundColor: '#154732',
});

const StyledButton = styled(Button)({
  color: 'white',
  textDecoration: 'none',
  fontFamily: 'Poppins',
  textTransform: 'none',
  display: 'flex',
  flexGrow: '1',
  fontSize: '16px',
});

export default function DropDown(props: Props) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const location = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [location]);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current?.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const win = useWindowDimensions();

  return (
    <>
      <StyledButton
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? 'composition-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        {props.name}
        {win.width <= 700 && (
          <img
            src={open ? '/expand_less.svg' : '/expand_more.svg'}
            style={{ filter: 'invert(100%)' }}
            height="32px"
          ></img>
        )}
      </StyledButton>
      {win.width > 700 && (
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom"
          transition
          disablePortal
        >
          {({ TransitionProps }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin: 'top',
              }}
            >
              <Background>
                <ClickAwayListener onClickAway={handleClose}>
                  {props.children}
                </ClickAwayListener>
              </Background>
            </Grow>
          )}
        </Popper>
      )}
      {win.width <= 700 && open && props.children}
    </>
  );
}
