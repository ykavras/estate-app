// @flow

import { NavigationActions, StackActions } from 'react-navigation'
import type { NavigationParams, NavigationRoute } from 'react-navigation'

let _navigation // eslint-disable-line

function setContainer(container: Object) {
  if (container && container._navigation)
    {_navigation = container._navigation} // eslint-disable-line
}

function reset(routeName: string, params?: NavigationParams) {
  _navigation.dispatch(
    StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          type: 'Navigation/NAVIGATE',
          routeName,
          params
        })
      ]
    })
  )
}

function navigate(routeName: string, params?: NavigationParams) {
  _navigation.dispatch(
    NavigationActions.navigate({
      type: 'Navigation/NAVIGATE',
      routeName,
      params
    })
  )
}

function navigateDeep(
  actions: { routeName: string, params?: NavigationParams }[]
) {
  _navigation.dispatch(
    actions.reduceRight(
      (prevAction, action): any => NavigationActions.navigate({
        type: 'Navigation/NAVIGATE',
        routeName: action.routeName,
        params: action.params,
        action: prevAction
      }),
      undefined
    )
  )
}

function getCurrentRoute(): NavigationRoute | null {
  if (!_navigation || !_navigation.state.nav) {
    return null
  }

  return _navigation.state.nav.routes[_navigation.state.nav.index] || null
}

export default {
  setContainer,
  navigateDeep,
  navigate,
  reset,
  getCurrentRoute
}