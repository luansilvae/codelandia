import styled from "styled-components";

export const Container = styled.section`
  background: var(--backgroundSecondary);
  padding: 50px 0;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;


  @media (min-width: 768px) {
    max-width: 1320px;
    flex-direction: row;
  }
`;
export const AppContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  overflow: hidden;

  h2 {
    color: var(--textTitle);
  }

  p {
    line-height: 2.4rem;
    color: var(--textSubtitle);
    font-size: 1.6rem;
    max-width: 480px;
  }
`;
export const DownloadAppOptions = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
  height: 100%;
  margin-top: 1rem;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;
export const DownloadAppButton = styled.a`
  display: flex;
  transition: filter 200ms ease-in-out;

  &:hover {
    cursor: pointer;
    filter: opacity(90%);
  }
`;
export const AppIllustration = styled.img`
  max-width: 38rem;
  width: 100%;
  overflow: hidden;

  @media (min-width: 768px) {
    width: 40%;
  }
  @media (min-width: 1024px) {
    width: 100%;
  }
`;
