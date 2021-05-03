import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 5vw;
  display: flex;
  top: 50%;
  position: absolute;
  width: 100%;
  transform: translateY(-50%);

  @media (max-width: 840px) {
    display: block;
    position: relative;
    transform: translateY(0);
    top: 5vh;

  }
`

export const Image = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  max-height: 500px;

  img {
    height: 100%;
    max-width: 100%;
  }
`

export const Text = styled.div`
  width: 100%;
  padding: 1rem 2rem;
`

export const InfoContainer = styled.div`
  display: flex;

  @media (max-width: 540px) {
    display: block;
  }
`

export const Info = styled.div`
  display: block;
  width: 50%;
  margin-top: 24px;
  p {
    font-weight: 700;

    span {
      font-weight: 400;
    }
  }
`