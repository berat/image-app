import React, {useContext} from 'react';
import {ActivityIndicator} from 'react-native';
import {ThemeContext} from 'styled-components';

import {User} from '../../icons';
import {Box, Text, Image} from '../../base';

export default function DetailItem({id, image, username}) {
  const theme = useContext(ThemeContext);
  return (
    <Box my={10} width="90%" mx={5}>
      <Image
        source={{
          uri:
            image ||
            'https://avatars.githubusercontent.com/u/10505575?s=400&u=739be5f20f3130a1dee1a3eeab0921af821a5bb2&v=4',
        }}
        width="100%"
        height="100%"
        borderRadius="normal"
        bg="#0000006c"
        PlaceholderContent={<ActivityIndicator />}>
        <Box flexDirection="row" alignItems="center" py={15} px={15}>
          <User stroke={theme.colors.white} width={16} height={16} />
          <Text ml={5} color="white" fontSize={15}>
            {username}
          </Text>
        </Box>
      </Image>
    </Box>
  );
}
