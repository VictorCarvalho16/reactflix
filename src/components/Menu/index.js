import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './index.css';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Logo TecFlix"/>
      </a>

      <Button as="a" href="/">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;
