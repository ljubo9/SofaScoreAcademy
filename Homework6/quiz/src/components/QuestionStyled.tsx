import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2px 2px;
  padding: 5px 5px;
  background-color: lightblue;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 15px 15px;
`;

export const SubmitButton = styled.button`
  color: #ffffff;
  background-color: #2e2424;
  margin-top: 10px;
  font-size: 30px;
  width: 150px;
  height: 60px;
`;

export const Item = styled.li`
  font-size: 25px;
  margin: 5px 0;
`;

export const Result = styled.p`
    font-size: 25px;
    font-weight: bold;
`