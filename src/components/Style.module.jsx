import styled from "styled-components";

export const BodyWrapper = styled.div`
  display : flex;
  flex-wrap : wrap;
  justify-content : space-around;
`
export const DivWrapper = styled.div`
        border: 2px solid black;
        border-radius: 5px;
        width: 400px;
        height: 460px;
 
`
export const CircleWrapper = styled.div`
    width: 85px;
    height: 85px;
    border-radius: 100%;
    border:1px solid black;
    margin:10px;
    background-color: ${(props) => props.circleColor};
`
export const StyledInput = styled.div`
    display: flex;
    flex-direction : column;
    height : 150px;
    width : 15%;

    input{
        height : 30px;
        margin-bottom : 10%;
        padding : 5%;
    }

    button{
        margin : auto;
        width : 50%;
        padding : 5%;
        background-color : gray;
        border-radius : 7%;
        color: white;
        font-weight: bold;
    }

    button:hover{
        border : hidden;
        background-color : #09373e;
        margin : auto;
        width : 50%;
        padding : 5%;
        cursor : pointer;
        font-weight : bold;
        color : white;
    }
`