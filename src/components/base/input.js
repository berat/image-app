import {TextInput} from 'react-native';
import styled from 'styled-components';
import {
  compose,
  color,
  size,
  typography,
  space,
  shadow,
  border,
  borderRadius,
} from 'styled-system';

import theme from '../../config/theme';

const Input = styled(TextInput).attrs(props => ({
  placeholderTextColor: theme.colors.blue,
}))(compose(borderRadius, border, typography, space, color, size, shadow));

export default Input;
