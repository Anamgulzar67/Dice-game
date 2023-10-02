import styled from "styled-components";


 export const Button = styled.button`
  font-size: 20px;
  color: white;
  padding: 14px 20px;
  background-color: black;
  border-radius: 5px;
  width: 300px;
  cursor: pointer;
  border:none;
  margin:30px 60px;
`;

export const OutlineButton = styled(Button)`
background-color: white;
border:4px solid black;
color:black;
border-radius: 10px;
`;

