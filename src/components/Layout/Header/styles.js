import styled from "styled-components";

export const HeaderComponent = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 80px;
  box-shadow: 0px -10px 35px 5px rgba(0, 0, 0, 0.4);
  background-color: ${({theme}) => theme.elements};
  transition: all .5s linear;
`;

export const Link = styled.a`
  font-size: 1rem;
  text-decoration: none;

  h1 {
    font-size: inherit;
  }
`;
