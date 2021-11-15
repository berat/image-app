import {Text as T} from 'react-native';
import styled from 'styled-components';
import {
  compose,
  color,
  size,
  typography,
  space,
  flexbox,
  border,
  position,
} from 'styled-system';

const Text = styled(T)(
  compose(typography, space, color, border, flexbox, size, position),
);

export default Text;
