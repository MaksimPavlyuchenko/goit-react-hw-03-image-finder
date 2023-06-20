import { ButtonStyled } from './Button.styled';

const Button = props => {
  return (
    <ButtonStyled type="button" onClick={props.onClick}>
      Load More
    </ButtonStyled>
  );
};
export default Button;
