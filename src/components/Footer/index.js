import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/logo.png';

function Footer() {
  return (
    <FooterBase>
      <img className="Logo" src={Logo} alt="FlexFlix logo" />
      <p>
        Done by 
        {' '}
        <a href="https://github.com/gabriel2413">Gabriel Negri</a>
      </p>

      <p>
        During Imersão React from
        {' '}
        <a href="https://www.alura.com.br/">
          Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
