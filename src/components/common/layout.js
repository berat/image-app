import React from 'react';

import {Box} from '../base';

export default function Layout({children}) {
  return <Box flex={1}>{children}</Box>;
}
