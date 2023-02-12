import { Box } from 'components/Box/Box';
import { Button } from 'components/Button/Button';
import { HiMap } from 'react-icons/hi';

export const App = () => {
  return (
    <Box bg="accent" color="muted">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea,
      sequi?
      <Button icon={HiMap}>Search</Button>
      <Button type="submit">Login</Button>
    </Box>
  );
};
