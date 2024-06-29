import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.footer`
  background: black;
`

const Copy = styled.span`
  color: white;
`

const Footer = () => {
  return (
    <Wrapper>
      <Copy>©TDNカウンター</Copy>
    </Wrapper>
  )
}

export default Footer