import { useCallback, useMemo, useState } from "react";

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

  const handleActiveMenu = useCallback(
    () => setActiveToggle((state) => !state),
    []
  );

  const LogoImg = useMemo(
    () => (themeName === "light" ? LogoLight : LogoDark),
    [themeName]
  );

  return (
    <Container>
      <HeaderWrapper>
        <Logo src={LogoImg} alt="Rachi logo" />
        <ToggleButton onClick={handleActiveMenu}>
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
              <LinkMenu href="#how-it-works" onClick={handleActiveMenu}>
                Funcionalidades
              </LinkMenu>
            </li>

            <li>
              <LinkMenu href="#app-banner" onClick={handleActiveMenu}>
                App
              </LinkMenu>
            </li>
            <li>
              <LinkMenu href="#pricing" onClick={handleActiveMenu}>
                Planos
              </LinkMenu>
            </li>
            <li>
              <LinkMenu href="#contact" onClick={handleActiveMenu}>
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
