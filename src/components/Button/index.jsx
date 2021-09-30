import styled from 'styled-components';

const StyledButton = styled.button`
  width: 300px;
  height: 50px;
  background-color: #b1fffd;
  margin: 15px 15px 10px 15px;
  padding: 5px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  :hover {
    background-color: #38a3a5;
  }
`;

const Button = ({ onClick }) => {
  return <StyledButton onClick={onClick}>MORE!!!!!</StyledButton>;
};

export default Button;
