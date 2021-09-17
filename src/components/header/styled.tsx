/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 4px;
  background-color: #24292f;
  color: white;

  input {
    border: 1px solid #57606a;
    border-radius: 8px;
    width: 100%;
    height: 44px;
    padding: 8px;
    font-weight: 500;
    color: white;
  }

  input::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #ccc;
    opacity: 1; /* Firefox */
  }

  button.buscar {
    background-color: #2da44e;
    padding: 8px 16px;
    margin: 0 16px;
    border-radius: 8px;

    &:hover {
      background-color: #229041;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }

    div {
      display: flex;
      justify-content: space-between;
    }

    span {
      font-weight: bold;
      color: #ffff;
    }
  }
  button.limpar {
    background-color: #ce1b46;
    padding: 8px 16px;
    margin: 0 16px;
    border-radius: 8px;

    &:hover {
      background-color: #bb1b42;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }

    div {
      display: flex;
      justify-content: space-between;
    }

    span {
      font-weight: bold;
      color: #ffff;
    }
  }
`;
