import {Image as I} from 'react-native-elements';
import styled from 'styled-components';
import {
  compose,
  color,
  size,
  typography,
  space,
  layout,
  flexbox,
} from 'styled-system';

const Image = styled(I)(
  compose(typography, layout, space, color, size, flexbox),
);

export default Image;
