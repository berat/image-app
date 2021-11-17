import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useRoute} from '@react-navigation/native';

import {getPhotoById} from '../../../store/photos';

export default function useDetail() {
  const {params} = useRoute();
  const dispatch = useDispatch();
  const {loading, photo} = useSelector(state => state.photos);

  useEffect(() => {
    dispatch(getPhotoById(params.id));
  }, []);
  return {loading, photo};
}
