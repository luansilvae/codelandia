import styled from "styled-components";
import ContactBackground from "../../assets/img/contact-background.png";

export const Container = styled.section`
  height: 420px;
  background-image: url(${ContactBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  object-fit: fill;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  max-width: 50rem;
  width: 100%;
  height: 100%;
  padding: 50px 20px;
  margin: 0 auto;
`;

export const ContactHeader = styled.header`
  text-align: center;

  h2 {
    color: var(--white);
    margin-bottom: 1.4rem;
  }

  p {
    color: var(--highlightedCardText);
    font-size: 1.6rem;
    line-height: 2.5rem;
  }
`;

export const FormContact = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
    gap: 4rem;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  input {
    padding: 1rem 1rem;
    background: transparent;
    border: none;
    outline: none;
    position: relative;
    color: var(--white);
    font-size: 1.5rem;
    font-weight: 400;

    ::placeholder {
      color: var(--white);
    }

    &:focus {
      + label::after {
        width: 100%;
      }
    }
  }

  label {
    background: var(--white);
    height: 2px;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      height: 2px;
      background: var(--blue);
      transition: 0.2s;
      width: 0%;
    }
  }
`;
