import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {fetchAllPhoto} from '../../../store/photos';

export default function useHomepage(){
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {loading, data} = useSelector(state => state.photos);

  const goDetail = id => {
    navigation.navigate('Detail', {id});
  };

  useEffect(() => {
    dispatch(fetchAllPhoto());
  }, []);

  const searchChange = e => {
    dispatch(fetchAllPhoto(e));
  };
  return {loading, data, goDetail, searchChange}
}