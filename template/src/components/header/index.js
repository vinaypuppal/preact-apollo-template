import { h } from 'preact';
import { Header, Title, NavLink, Nav } from './index.styles';

const HeaderBar = () => (
  <Header>
    <Title>Preact App</Title>
    <Nav>
      <NavLink activeClassName="active" href="/">
        Home
      </NavLink>
      <NavLink activeClassName="active" href="/profile">
        Me
      </NavLink>
      <NavLink activeClassName="active" href="/profile/john">
        John
      </NavLink>
    </Nav>
  </Header>
);

export default HeaderBar;
