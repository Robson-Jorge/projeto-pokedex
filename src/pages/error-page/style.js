import styled from "styled-components";

export const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  img {
    border-radius: 15px;
    /* height: 100%; */
  }
  a {
    padding: 10px 30px;
    border-radius: 5px;
    border: none;
    background-color: #d00;
    position: absolute;
    bottom: 25%;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    color: #f2f2f2;
    transition: 0.5s ease;
    box-shadow: 0 0 10px 0 #000;
    opacity: 0.8;
    &:hover {
      background-color: #f00;
      opacity: 1;
    }
  }
`