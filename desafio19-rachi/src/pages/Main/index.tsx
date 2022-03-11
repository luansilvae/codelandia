import React from 'react';
import Header from '../../components/Header';
import { ThemeName } from '../../styles/theme';

import { Container } from './styles';

interface Props {
  themeName: ThemeName
  setThemeName: (newName: ThemeName) => void
}

const Main: React.FC<Props> = ({
  themeName, setThemeName
}) => {
  
  // function toggleTheme() {
  //   setThemeName(themeName === 'light' ? 'dark': 'light')
  // }

  return (
    <Container>
      <Header />
      {/* <button onClick={toggleTheme}>TROCAR TEMA</button> */}

      <h1>Hello world</h1>
      <h2>Teste</h2>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quas praesentium suscipit hic dolor, nostrum ipsa cum iste! Fuga iusto reiciendis nihil at veniam officiis obcaecati voluptatum, dolorem voluptatibus explicabo nisi voluptates expedita ab soluta. Nostrum at ipsum provident tenetur quisquam facere totam obcaecati expedita.</p>
    </Container>
  );
}

export default Main;