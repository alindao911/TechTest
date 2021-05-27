import * as React from 'react';

let navigator = React.createRef();

function setTopLevelNavigator(navigatorRef) {
  navigator.current = navigatorRef;
}
export function navigate(name, params, key) {
  if (!key) {
    navigator.current?.navigate(name, params);
    return;
  }

  navigator.current?.navigate({name: name, key: key, params: params});
}

function goBack() {
  navigator.current?._navigation.goBack();
}

export default {
  goBack,
  navigate,
  setTopLevelNavigator,
};
