import React from 'react';
import SocietiesList from './Societies.json';
import { Paper, styled } from '@mui/material';

interface CategoryProps {
  category: string;
}

const SocietyBox = styled(Paper)({
  marginBottom: '20px',
});

function SocietyCategory(props: CategoryProps) {
  const { category } = props;
  const group = SocietiesList.filter((a) => a.Category === category);
  return (
    <>
      {group.map((item) => (
        <React.Fragment key={item.Title}>
          <SocietyBox className="SocietyItem" elevation={2}>
            <div className="SocietyFlexBox">
              <div className="TextSection">
                <h3>{item.Title}</h3>
                <p>{item.Description}</p>
                <div className="links">
                  {item.Instagram && (
                    <a href={item.Instagram} target="_blank" rel="noreferrer">
                      <img className="SocialIcon" src="/Instagram.svg" />
                    </a>
                  )}
                  {item.Facebook && (
                    <a href={item.Facebook} target="_blank" rel="noreferrer">
                      <img className="SocialIcon" src="/Facebook.svg" />
                    </a>
                  )}
                  {item.Website && (
                    <a href={item.Website} target="_blank" rel="noreferrer">
                      <img className="WebIcon" src="/WebLink.svg" />
                    </a>
                  )}
                </div>
              </div>
              {item.Image && <img className="SocietyImage" src={item.Image} />}
            </div>
          </SocietyBox>
        </React.Fragment>
      ))}
    </>
  );
}

export default SocietyCategory;
