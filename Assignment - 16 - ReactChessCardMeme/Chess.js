import React from 'react'
import styled from 'styled-components'
import EvenLayer from './EvenLayer'
import OddLayer from './OddLayer'
function Chess() {
    return (
        <Container>
            <EvenLayer/>
            <OddLayer />
            <EvenLayer/>
            <OddLayer />
            <EvenLayer/>
            <OddLayer />
            <EvenLayer/>
            <OddLayer />
        </Container>
    )
}


const Container=styled.div`
  width:50vw;
  height:70vh;
  min-height:80vh;
  background-color:black;
  padding:1rem 2rem;
`

export default Chess
