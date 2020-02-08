import { NavigationActions } from 'react-navigation';

let navigator;

export function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

export function navigate(routeName, params) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

export function goBack() {
  navigator.dispatch(NavigationActions.back());
}
