import React from 'react';
import styled from 'styled-components';

export const Footer: React.FC = () => {
  return (
    <Container>
      <span>Desenvolvido por <a href="https://github.com/luansilvae" target="_blank">Luan Silva</a></span>
    </Container>
  );
}


const Container = styled.footer`
  background: var(--background);
  padding: 2rem;
  text-align: center;

  span {
    font-size: 1.4rem;
    color: var(--textTitle);

    a {
      font-weight: 700;
      color: var(--blue);
      position: relative;
      

      :hover {
        cursor: pointer;
        &::after {
          width: 100%;
        }
      }

      &::after {
        content: "";
        width: 0;
        height: 2px;
        background: var(--blue);
        position: absolute;
        bottom: 0;
        left: 0;
        transition: all 0.2s ease-in;
      }
    }
  }
`