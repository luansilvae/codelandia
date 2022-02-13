import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
  display: block;
  background: #f5f3f0;
  -webkit-box-shadow: inset 0px 0px 0px 2px #e3e3e3;
  -moz-box-shadow: inset 0px 0px 0px 2px #e3e3e3;
  box-shadow: inset 0px 0px 0px 2px #e3e3e3;
  overflow: hidden;
  transition: all 300ms ease-in-out;

  img {
    display: block;
    width: 100%;
    transform: scale(0.9);
    padding: 0px 10px 0;
    transition: transform 300ms ease-out;
  }

  h1 {
    display: none;
    z-index: 10;
    color: var(--white);
    padding: 8px;
    margin: 0;
    font-size: 3rem;
    background: var(--dark);
    position: absolute;
    bottom: 0;
    width: 100%;
    border: solid 2px var(--dark);

    transition: all 300ms ease-out;
  }

  :hover {
    background: #e3e3e3;
    -webkit-box-shadow: inset 0px 0px 0px 2px var(--dark);
    -moz-box-shadow: inset 0px 0px 0px 2px var(--dark);
    box-shadow: inset 0px 0px 0px 2px var(--dark);

    img {
      transition: transform 300ms ease-in;
      transform: scale(1);
    }

    h1 {
      transition: all 300ms ease-in;
      display: block;
    }
  }
`;
