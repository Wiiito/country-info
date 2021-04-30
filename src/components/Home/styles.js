import styled from 'styled-components'

export const Countries = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 5vw;
`

export const Header = styled.div`
  margin-top: 20px;
  display: flex;
  width: 100%;
  padding: 0 5vw;
  display: flex;
  justify-content: space-between;

  @media (max-width: 580px) {
    display: block;
  }
`

export const Search = styled.div`
  position: relative;
  background: ${({theme}) => theme.elements};
  border-radius: 5px;
  width: 250px;
  color: ${({theme}) => theme.text};
  display: flex;
  align-items: center;
  padding-left: 1rem;
  transition: .5s linear all;
  box-shadow: 2px 2px 5px 1px rgba(0,0,0, 0.2);

  @media (max-width: 580px) {
    width: 100%;
    margin-bottom: 20px;
  }

  svg {
    font-size: 1.5rem;
    position: absolute;
    z-index: 5;
  }
`

export const Select = styled.select`
  outline: none;
  border: none;
  font-size: 1rem;
  padding: .6rem 1.5rem;
  background-color: ${({theme}) => theme.elements};
  color: inherit;
  border-radius: 10px;
  -webkit-appearance: none;
  transition: all .5s linear;
  box-shadow: 2px 2px 5px 1px rgba(0,0,0, 0.2);

  option {
    font-size: 0.75rem;
    margin-bottom: .25rem;
    border: 0;
  }

  &::-ms-expand {
    display: none;
  }
`

export const Input = styled.input`
  outline: none;
  border: none;
  font-size: 1rem;
  padding: .6rem 1.5rem .6rem 2.5rem;
  background-color: transparent;
  color: inherit;

  &::placeholder {
    color: ${({theme}) => theme.text};
    transition: .5s linear all;
  }
`