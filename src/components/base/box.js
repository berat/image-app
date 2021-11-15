import {View} from 'react-native';
import styled from 'styled-components';
import {
  compose,
  color,
  size,
  space,
  border,
  flexbox,
  borderRadius,
  layout,
} from 'styled-system';

const Box = styled(View)(
  compose(flexbox, layout, space, border, color, size, borderRadius),
);

export default Box;
