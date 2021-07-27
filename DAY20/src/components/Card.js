import React from 'react'
import styled from 'styled-components'
function Card({title,calorie,list,setList,id}) {
    const bgColor= calorie>100 ? "red":"green"

    const onDeleted=()=>{
        const newList=list.filter((item)=>{
            if(item.id!=id){
                return item
            }
        })

        setList(newList)
    }
    return (
        <Container style={{backgroundColor:bgColor}}>
              <Wrapper>
              <h4>{title}</h4>
              <button onClick={onDeleted}>Delete</button>
              </Wrapper>
              <p>you have consumed {calorie} cals today</p>
        </Container>
    )
}

const Container=styled.div`
   width:100%;
   height:auto;
   background-color:grey;
   color:#fff;
   padding-top:1rem;
   padding-bottom:1rem;
   margin-bottom:1rem;
   border-radius:1rem;
   h4{
       font-size:1.5rem;
       margin-left:1rem;
   }

   p{
       font-weight:600;
       font-size:1.2rem;
       margin-top:1rem;
       margin-left:1rem;
   }
`


const Wrapper=styled.div`
   display:flex;
   justify-content:space-between;
   align-items:center;

   button{
       margin-right:1rem;
       padding:0.5rem;
       border-radius:0.5rem;
       border:none;
       font-weight:600;
       background-color:gray;
       color:white;
       cursor: pointer;
   }
`
export default Card
