import { Box } from 'components/Box/Box';
import { Logo } from './Logo/Logo';

export const Appbar = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      as="header"
      px={4}
      py={3}
      bg="primary"
      borderRadius="normal"
    >
      <Logo />
      <div>UserMenu</div>
    </Box>
  );
};
