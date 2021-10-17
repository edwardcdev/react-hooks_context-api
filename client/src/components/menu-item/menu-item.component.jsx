import React from 'react';
import { withRouter } from 'react-router-dom';
// import './menu-item.styles.scss';

import { MenuItemContainer, BackgroundImageContainer, ContentContainer, ContentTitle, ContentSubtitle } from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl }) => {
  return (
    <MenuItemContainer
      size={size} 
      onClick={() => history.push(`/${linkUrl}`)} 
    >
      <BackgroundImageContainer imageUrl={imageUrl}></BackgroundImageContainer>
      <ContentContainer>
        <ContentTitle className="title">{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle className="subtitle">SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  )
}

export default withRouter(MenuItem);