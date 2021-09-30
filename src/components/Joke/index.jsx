import styled from 'styled-components';

const StyledJoke = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 300px;
  max-width: 450px;
  height: 150px;
  margin: 16px;
  padding: 12px 16px;
  border: 2px solid #38a3a5;
  border-radius: 8px;
`;

const Joke = ({ joke }) => {
  return <StyledJoke>{joke}</StyledJoke>;
};

export default Joke;
