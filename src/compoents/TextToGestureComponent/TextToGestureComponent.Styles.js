import styled from "styled-components";

export const TextToGestureComponentOuterContainer = styled.div`
  display: flex;
  padding: 0px 50px;

  @media (max-width:800px){
    flex-direction: column;
  }
`;

export const TextToGestureComponentVideoContainer = styled.div`
  display: flex;
  flex: 50%;
  color: white;

  @media (max-width:800px){
  flex: 100%;
  }
`;

export const TextToGestureComponentButtonsContainer = styled.div`
  flex: 50%;
  padding: 20px;
  align-self: start;

  @media (max-width:800px){
  flex: 100%;
  }
`;


export const TextToGestureComponentButton = styled.button`
color: #1C2938;
background-color: white;
border-radius: 6px;
margin: 5px 10px;
padding: 10px;
border: none;
font-size: 16px;
font-weight: bold;


&:hover{
  color: white;
  background-color: #1C2938;
  cursor: pointer;
  border: 2px solid white;
}
`;

export const TextToGestureComponentOuterButton = styled.div`
display: flex;
text-align: center;
background-color: #1C2938;
`;