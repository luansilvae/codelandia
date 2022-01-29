import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const LeftSide = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    width: 100%;
    background: #ddd;
  }
`;

export const Illustration = styled.img`
  max-width: 400px;
  padding: 2rem;
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 2rem;

`;

export const Wrapper = styled.div`
  width: 100%;

  @media (min-width: 572px) {
    max-width: 400px;
  }

  .title {
    display: flex;
    flex-direction: column-reverse;
    gap: 5px;
    margin-bottom: 4rem;

    h2 {
      font-weight: 400;
      font-size: 1.8rem;
      line-height: 20px;
    }

    h1 {
      font-size: 3rem;
      line-height: 32.68px;
    }
  }

  .link {
    color: var(--blue);
    transition: all 100ms ease-in-out;

    &:hover {
      filter: brightness(90%);
    }
  }

  .not-registered {
    text-align: center;

    a {
      margin-left: 5px;
    }
  }
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: 1.8rem;
  }

  input {
    border: 1px solid #e8e8e8;
    border-radius: 5px;
    padding: 15px 10px;
    margin-top: 10px;
    font-family: Lato, sans-serif;
    font-size: 1.6rem;
  }

  input#email {
    margin-bottom: 10px;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;

  .check {
    display: flex;
    align-items: center;
    gap: 5px;

    label, input {
      cursor: pointer;
    }

    input {
      margin-top: 3px;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  margin-top: 25px;
`;

export const Button = styled.button`
  font-family: Lato, sans-serif;
  padding: 15px;
  cursor: pointer;
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  gap: 10px;
  background: var(--green);
  font-size: 16px;
  font-weight: 400;

  &:last-of-type {
    background: var(--dark);
    margin-bottom: 30px;
  }
`;
