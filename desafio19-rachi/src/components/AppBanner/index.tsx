import React from "react";

import {
  Container,
  Wrapper,
  AppContent,
  DownloadAppOptions,
  DownloadAppButton,
  AppIllustration,
} from "./styles";

import PlayStore from "../../assets/img/play-store.svg";
import AppStore from "../../assets/img/app-store.svg";
import AppImage from "../../assets/img/app-illustration.svg";

export const AppBanner: React.FC = () => {
  return (
    <Container id="app-banner">
      <Wrapper>
        <AppContent data-aos="fade-up">
          <h2>Baixe nosso app para desfrutar mais!</h2>
          <p>
            Amet in elementum nulla scelerisque dui, egestas at. Elit
            consectetur turpis elementum amet vitae et etiam nec. Varius
            volutpat hac adipiscing tincidunt pretium.
          </p>

          <DownloadAppOptions>
            <DownloadAppButton href="#">
              <img src={PlayStore} alt="Play Store" />
            </DownloadAppButton>
            <DownloadAppButton href="#">
              <img src={AppStore} alt="App Store" />
            </DownloadAppButton>
          </DownloadAppOptions>
        </AppContent>
        <AppIllustration
          data-aos="fade-up"
          src={AppImage}
          alt="App Illustration"
        />
      </Wrapper>
    </Container>
  );
};
