import styled from 'styled-components';

const StyledButton = styled.button`
  margin: ${p => p.theme.space[0]};
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.background};
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p =>
    p.disabled ? p.theme.colors.muted : p.theme.colors.primary};
  color: ${p =>
    p.disabled ? p => p.theme.colors.secondary : p => p.theme.colors.muted};
  cursor: pointer;
  :hover:not(:disabled),
  :focus:not(:disabled) {
    background-color: ${p => p.theme.colors.secondary};
  }
`;

export const Button = ({ type = 'button', disabled = false, children }) => {
  return (
    <StyledButton type={type} disabled={disabled}>
      {children}
    </StyledButton>
  );
};
