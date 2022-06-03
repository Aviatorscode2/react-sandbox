import { useState } from 'react';

// useLocalStorage saves the state i pass in from the form in CustomHookExample2 to local storage and we can now get that data from local storage and display it.
function useLocalStorage(key, initialValue) {
  const [localStorageValue, setLocalStorageValue] = useState(() =>
    getLocalStorageValue(key, initialValue)
  );

  const setValue = (value) => {
    //check if the value is a function
    const valueToStore =
      value instanceof Function ? value(localStorageValue) : value;

    //set value to state
    setLocalStorageValue(value);

    //set value to local storage
    localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [localStorageValue, setValue];
}

function getLocalStorageValue(key, initialValue) {
  const itemFromStorage = localStorage.getItem(key);
  return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue;
}
export default useLocalStorage;
