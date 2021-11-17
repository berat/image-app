import {Image as I} from 'react-native-elements';
import styled from 'styled-components';
import {
  compose,
  color,
  size,
  typography,
  borderRadius,
  space,
  layout,
  flexbox,
} from 'styled-system';

const Image = styled(I)(
  compose(typography, layout, space, borderRadius, color, size, flexbox),
);

export default Image;
