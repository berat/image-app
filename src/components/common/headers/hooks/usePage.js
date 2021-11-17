import {useState, useEffect} from 'react';

export default function usePage(onChange) {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState("");

  const onSearch = text => {
    setSearchText(text);
    setInterval(() => {
      onChange(text);
    }, 500);
  };

  useEffect(() => {
    // maybe we don't need
    if (searchText.length === 0) {
      // todo:make normal list
    }
  }, [searchText]);

  const cancelHandler = () => {
    setSearchVisible(false);
    //todo: make normal list
  };

  return {searchVisible, setSearchVisible, searchText, cancelHandler, onSearch};
}
