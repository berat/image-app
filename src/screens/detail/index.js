import React from 'react';
import {ActivityIndicator} from 'react-native';

import {Layout, DetailHeader, DetailItem} from '../../components/common';
import useDetail from './hooks/useDetail';

export default function Detail() {
  const {loading, photo} = useDetail();

  return (
    <Layout>
      <DetailHeader />
      {loading ? <ActivityIndicator /> : <DetailItem {...photo} />}
    </Layout>
  );
}
