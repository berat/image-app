import {FlatList} from 'react-native';
import styled from 'styled-components';
import {
  compose,
  color,
  size,
  typography,
  space,
  flexbox,
  border,
  borderRadius,
} from 'styled-system';

const List = styled(FlatList)(
  compose(color, size, flexbox, typography, border, borderRadius, space),
);

export default List;
