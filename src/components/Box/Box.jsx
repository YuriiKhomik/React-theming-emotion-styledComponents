import styled from 'styled-components';
import { space, layout, color } from 'styled-system';

// export const Box = styled.div`
//   ${color},
//   ${space},
//   ${layout}
// `;
// OR
export const Box = styled('div')(
  //   {
  //     boxSizing: 'border-box',
  //   },
  space,
  layout,
  color
);
