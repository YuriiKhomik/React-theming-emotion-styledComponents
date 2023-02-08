// import styled from '@emotion/styled';
import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  border: ${p => `2px dashed ${p.theme.colors.primary}`};
  padding: ${p => p.theme.space[3]}px;
  border-radius: 4px;
`;

export const EventName = styled.h2`
  margin-top: 0;
  font-size: ${p => p.theme.fontSizes.s}px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

export const Info = styled.p`
  display: flex;
  align-items: center;
  margin-top: 0;
  margin-bottom: 8px;
  color: ${props => props.theme.colors.text};
  font-size: 16px;
  line-height: 24px;
  font-weight: 24px;
  letter-spacing: 0.25px;
  //   стилізуємо вкладений елемент:
  svg {
    color: skyblue;
  }
  //   стилізуємо ховер/фокус
  //   можна використовувати '&', а можна і без нього
  &:hover,
  &:focus {
    svg {
      color: pink;
    }
  }
`;

const setBgColor = props => {
  //   console.log(props.theme);
  switch (props.eventType) {
    case 'free':
      return props.theme.colors.green;
    case 'paid':
      return props.theme.colors.blue;
    case 'vip':
      return props.theme.colors.red;
    default:
      return props.theme.colors.accent;
  }
};

export const Chip = styled.span`
  position: absolute;
  top: 4px;
  right: 4px;
  padding: 4px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  //   background-color: #000;
  color: ${props => props.theme.colors.white};
  background-color: ${setBgColor};
`;
