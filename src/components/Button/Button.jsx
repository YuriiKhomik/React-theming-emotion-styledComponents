import { StyledButton } from './Button.styled';

export const Button = ({
  icon: Icon = null,
  type = 'button',
  disabled = false,
  children,
}) => {
  return (
    <StyledButton type={type} disabled={disabled}>
      {Icon && <Icon />}
      {children}
    </StyledButton>
  );
};
