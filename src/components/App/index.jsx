import React from 'react';
import Button from '../Button';
import { getJoke } from '../../actions/jokes';
import { Provider } from 'react-redux';
import store from '../../store';
import Jokes from '../Jokes';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  
  
`;

const App = () => {


 const onClick = () => {
   console.log(`click`)
   store.dispatch(getJoke())
 }

  return (
    <Provider store={store}>
      <StyledContainer>
        <Button onClick={()=> onClick()}/>
        <Jokes />
      </StyledContainer>
    </Provider>
  );
};

export default App;
