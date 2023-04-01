import React, { useState } from 'react';
import '../index.css';
import './Societies.css';
import usePageTitle from '../usePageTitle';
import SocietyCategory from './SocietyCategory';
import { Paper, styled } from '@mui/material';

const Header = styled(Paper)({
  backgroundColor: '#154732',
  color: 'white',
  padding: '0 20px',
  marginBottom: '20px',
  display: 'flex',
  flexDirection: 'row',
  justifyItems: 'center',
});

function Societies() {
  usePageTitle('Societies | Girton JCR');
  const [sportOpen, setSportOpen] = useState(false);
  const [subjectOpen, setSubjectOpen] = useState(false);
  const [culturalOpen, setCulturalOpen] = useState(false);
  const [otherOpen, setOtherOpen] = useState(false);
  return (
    <div className="Societies">
      <h1>Societies</h1>
      <Header
        onClick={() => {
          setSportOpen(!sportOpen);
        }}
      >
        <h2 className="SocietyGroupHeader">Sport</h2>
        <img
          src={sportOpen ? '/expand_less.svg' : 'expand_more.svg'}
          style={{ filter: 'invert(100%)' }}
        />
      </Header>
      {sportOpen && <SocietyCategory category="Sport" />}
      <Header
        onClick={() => {
          setSubjectOpen(!subjectOpen);
        }}
      >
        <h2 className="SocietyGroupHeader">Subject</h2>
        <img
          src={subjectOpen ? '/expand_less.svg' : 'expand_more.svg'}
          style={{ filter: 'invert(100%)' }}
        />
      </Header>
      {subjectOpen && <SocietyCategory category="Subject" />}
      <Header
        onClick={() => {
          setCulturalOpen(!culturalOpen);
        }}
      >
        <h2 className="SocietyGroupHeader">Cultural</h2>
        <img
          src={culturalOpen ? '/expand_less.svg' : 'expand_more.svg'}
          style={{ filter: 'invert(100%)' }}
        />
      </Header>
      {culturalOpen && <SocietyCategory category="Cultural" />}
      <Header
        onClick={() => {
          setOtherOpen(!otherOpen);
        }}
      >
        <h2 className="SocietyGroupHeader">Other</h2>
        <img
          src={otherOpen ? '/expand_less.svg' : 'expand_more.svg'}
          style={{ filter: 'invert(100%)' }}
        />
      </Header>
      {otherOpen && <SocietyCategory category="Other" />}
    </div>
  );
}

export default Societies;
