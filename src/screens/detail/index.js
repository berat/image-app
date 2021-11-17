import React from 'react';

import {Box, List} from '../../components/base';
import {Layout, DetailHeader, DetailItem} from '../../components/common';

const data = {
  id: 1,
  image:
    'https://i.internethaber.com/storage/files/images/2019/05/08/avatar-2-3-ve-4un-vizyon-tarihle-lna9_cover.jpg',
  title: 'Deneme bir içerik',
  username: 'berat',
  tarih: new Date(),
  url: 'https://i.internethaber.com/storage/files/images/2019/05/08/avatar-2-3-ve-4un-vizyon-tarihle-lna9_cover.jpg',
};

export default function Detail() {
  return (
    <Layout>
      <DetailHeader />
      <Box mx={10} flex={1}>
        <DetailItem {...data} />
      </Box>
    </Layout>
  );
}
