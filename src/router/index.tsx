import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '@/pages/Home';
import Detail from '@/pages/Detail';

export default class RouteConfig extends React.Component<{}, {}>{
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/detail/:id" component={Detail} />
                </Switch>
            </BrowserRouter>
        )
    }
}