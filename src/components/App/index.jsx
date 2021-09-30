import { Provider } from 'react-redux';
import Button from '../Button';
import store from '../../store';
import Jokes from '../Jokes';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const App = () => {
  return (
    <Provider store={store}>
      <StyledContainer>
        <Button />
        <Jokes />
      </StyledContainer>
    </Provider>
  );
};

export default App;
