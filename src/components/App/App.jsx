import { Box } from 'components/Box/Box';
import { Button } from 'components/Button/Button';
import { HiMap } from 'react-icons/hi';
import { Appbar } from './Appbar/Appbar';

export const App = () => {
  return (
    <Box
      bg="accent"
      color="muted"
      p="3"
      m="3"
      // display="flex"
      alignItems="center"
      border="none"
      borderRadius="normal"
      position="relative"
      as="main"
    >
      <Appbar />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        p="5"
        bg="pink"
        color="blue"
        borderRadius="normal"
        as="section"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea,
        sequi?
        <Button icon={HiMap}>Search</Button>
        <Button type="submit">Login</Button>
      </Box>
    </Box>
  );
};
