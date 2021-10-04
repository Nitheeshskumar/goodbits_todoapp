import React from 'react'
import { Switch, Redirect, BrowserRouter, Route } from 'react-router-dom';
import ContextStore from './ContextStore'
import ErrorBoundary from '../../Utils/ErrorBoundary';
import MainWrapper from './MainWrapper';
const Detail = React.lazy(() => import('../Todo/TodoDetail'))
const Dashboard = React.lazy(() => import('../Todo/Dashboard'))



const RootRoutes = () => (
    <BrowserRouter>
        <ContextStore>
            <ErrorBoundary>
                <MainWrapper>
                    <React.Suspense
                        fallback={
                            <>
                                <div className="linear-activity">
                                    <div className="indeterminate"></div>
                                </div>
                                <div className="loader_wrap loader"></div>
                            </>
                        }
                    >
                        <Switch>
                            <Route path="/create" render={routeParams => <Detail {...routeParams} key={routeParams.match.url} />} />
                            <Route path="/detail" render={routeParams => <Detail {...routeParams} key={routeParams.match.url} />} />
                            <Route path="/dashboard" render={routeParams => <Dashboard {...routeParams} key={routeParams.match.url} />} />
                            <Redirect from="*" to="/dashboad" push />
                        </Switch>
                    </React.Suspense>
                </MainWrapper>
            </ErrorBoundary>
        </ContextStore>
    </BrowserRouter>
);

export default RootRoutes;
