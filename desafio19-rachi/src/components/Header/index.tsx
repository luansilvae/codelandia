import { useState } from "react";
import {
  Container,
  Logo,
  ToggleButton,
  MenuButton,
  CloseButton,
  Menu,
  LinkMenu,
  MobileMenu,
} from "./styles";

import LogoLight from "../../assets/img/logo-light.svg";
import LogoDark from "../../assets/img/logo-dark.svg";

function Navbar() {
  const [activeToggle, setActiveToggle] = useState<boolean>(false);
  return (
    <Container>
      <Logo src={LogoLight} alt="Rachi logo" />

      <ToggleButton
        onClick={() => {
          setActiveToggle((state) => !state);
        }}
      >
        {activeToggle ? <CloseButton /> : <MenuButton />}
      </ToggleButton>

      <Menu activeToggle={activeToggle}>
        <li>
          <LinkMenu href="#">Funcionalidades</LinkMenu>
        </li>

        <li>
          <LinkMenu href="#">App</LinkMenu>
        </li>
        <li>
          <LinkMenu href="#">Planos</LinkMenu>
        </li>
        <li>
          <LinkMenu href="#">Contato</LinkMenu>
        </li>
      </Menu>

      {activeToggle && (
        <MobileMenu>
          <li>
            <LinkMenu href="#">Funcionalidades</LinkMenu>
          </li>

          <li>
            <LinkMenu href="#">App</LinkMenu>
          </li>
          <li>
            <LinkMenu href="#">Planos</LinkMenu>
          </li>
          <li>
            <LinkMenu href="#">Contato</LinkMenu>
          </li>
        </MobileMenu>
      )}
    </Container>
  );
}

export default Navbar;
