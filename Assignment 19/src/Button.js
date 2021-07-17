import React ,{useState} from 'react'
import styled from 'styled-components'
function Button() {
     const [counter, setCounter] = useState(0)
    return (
        <Container onClick={()=>setCounter(counter+1)}> {counter} </Container>
    )
}

const Container=styled.button`
 width:10vw;
 height:5vh;
 border-radius:10px;
border:none;
background-color:#5E88FF;
color:white;
font-size:1.8rem;
cursor:pointer;
&:hover{
    background-color:#002AA1;
}
`
export default Button
