import styled from 'styled-components';

export const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${p => p.theme.space[2]}px;
  margin: ${p => p.theme.space[0]};
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  border: ${p => p.theme.borders.normal}
    ${p => p.theme.colors.background};
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p =>
    p.disabled ? p.theme.colors.muted : p.theme.colors.primary};
  color: ${p =>
    p.disabled
      ? p => p.theme.colors.secondary
      : p => p.theme.colors.muted};
  :hover:not(:disabled),
  :focus:not(:disabled) {
    cursor: pointer;
    background-color: ${p => p.theme.colors.secondary};
  }
`;
