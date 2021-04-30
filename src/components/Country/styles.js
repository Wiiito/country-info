import styled from 'styled-components'

export const Container = styled.div`
  max-width: 250px;
  transition: .5s all linear;
  margin: 20px auto;
  overflow: hidden;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.elements};
  box-shadow: 0px 1px 5px 1px rgba(0,0,0, 0.2);

  img {
    width: 100%;
  }
`

export const Text = styled.div`
  width: 100%;
  padding: 20px;

  h4 {
    font-size: 1rem;
  }

  h3 span, h4 span {
    font-weight: 400;
    margin-left: 10px;
  }
`