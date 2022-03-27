import React from 'react';
import { Link } from 'react-router-dom';

//Images
import DatabaseLogo from '../../../images/Database-logo.svg';
import MainLogo from '../../../images/Main-logo.svg';

//Styles import
import { Wrapper, Content, MainLogoImg, DatabaseLogoImg, MainName } from './Header.styles';

const Header = () => (
  <Wrapper>
    <Content>
      <Link to='/'>
        <MainLogoImg src={MainLogo} alt="tmdb-logo" />
      </Link>
      <MainName>Movies Review</MainName>
        <p className='Login'>
          <Link to='/Login' style={{ textDecoration: 'none' }}>Login</Link>
        </p>
      <DatabaseLogoImg src={DatabaseLogo} alt="rmdb-logo" />
    </Content>
  </Wrapper>
);

export default Header;
