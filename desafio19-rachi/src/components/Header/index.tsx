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
  HeaderWrapper,
} from "./styles";

import LogoLight from "../../assets/img/logo-light.svg";
import LogoDark from "../../assets/img/logo-dark.svg";
import { useCustomThemeContext } from "../../hooks/useCustomTheme";
import { SwitchButton } from "../SwitchButton";

export const Header: React.FC = () => {
  const [activeToggle, setActiveToggle] = useState<boolean>(false);
  const { themeName } = useCustomThemeContext();

  return (
    <Container>
      <HeaderWrapper>
        <Logo
          src={themeName === "light" ? LogoLight : LogoDark}
          alt="Rachi logo"
        />
        <ToggleButton
          onClick={() => {
            setActiveToggle((state) => !state);
          }}
        >
          {activeToggle ? <CloseButton /> : <MenuButton />}
        </ToggleButton>

        <Menu activeToggle={activeToggle}>
          <li>
            <LinkMenu href="#how-it-works">Funcionalidades</LinkMenu>
          </li>

          <li>
            <LinkMenu href="#app-banner">App</LinkMenu>
          </li>
          <li>
            <LinkMenu href="#pricing">Planos</LinkMenu>
          </li>
          <li>
            <LinkMenu href="#contact">Contato</LinkMenu>
          </li>
          <SwitchButton />
        </Menu>

        {activeToggle && (
          <MobileMenu>
            <li>
              <LinkMenu
                href="#how-it-works"
                onClick={() => {
                  setActiveToggle((state) => !state);
                }}
              >
                Funcionalidades
              </LinkMenu>
            </li>

            <li>
              <LinkMenu
                href="#app-banner"
                onClick={() => {
                  setActiveToggle((state) => !state);
                }}
              >
                App
              </LinkMenu>
            </li>
            <li>
              <LinkMenu
                href="#pricing"
                onClick={() => {
                  setActiveToggle((state) => !state);
                }}
              >
                Planos
              </LinkMenu>
            </li>
            <li>
              <LinkMenu
                href="#contact"
                onClick={() => {
                  setActiveToggle((state) => !state);
                }}
              >
                Contato
              </LinkMenu>
            </li>
            <SwitchButton />
          </MobileMenu>
        )}
      </HeaderWrapper>
    </Container>
  );
};
