import React, { memo, VFC } from 'react'
import { Route, Switch } from 'react-router-dom'

import { Page404 } from '../components/pages/Page404'
import { PageBasicInfo } from '../components/pages/PageBasicInfo'
import { PageConsultation } from '../components/pages/PageConsultation'
import { PageQuestion } from '../components/pages/PageQuestion'
import { PageResult } from '../components/pages/PageResult'


export const Router : VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <PageBasicInfo/>
      </Route>

      <Route path="/question">
        <PageQuestion/>
      </Route>

      <Route path="/consultation">
        <PageConsultation/>
      </Route>

      <Route path="/result">
        <PageResult/>
      </Route>

      <Route path="*">
        <Page404/>
      </Route>
    </Switch>
  )
});