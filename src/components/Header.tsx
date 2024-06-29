import React from 'react'
import styled from 'styled-components'

const backgroundStyle: string = `
  background-image: linear-gradient(90deg, rgba(0, 0, 0, 1), rgba(85, 85, 85, 1));
`

const Wrapper = styled.header`
  ${backgroundStyle}
  padding: 1.5rem 0;
`

const Title = styled.p`
  color: white;
  font-size: 3.6rem;
  padding: 0;
  margin: 0;
`

const Header = () => {
  return (
    <Wrapper>
      <Title>TDNカウンター</Title>
    </Wrapper>
  )
}

export default Header