import React, { Suspense } from 'react'; // lazy carrega aquilo que estiver usando e Suspense retorna uma mensagem de carregamento
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // import Ract-Router-Dom para criar rotas no React
import { CircularProgress } from '@mui/material';

// const Login = React.lazy(() => import('./Login')); 

const Routes = () => {
  <Router>
    <Suspense fallback={<div className="d-flex justify-center mt-5 pt-5"><CircularProgress /></div>}>
      <Switch>
        <Route exact path="/" component={() => (<h1>Home</h1>) } />
      </Switch>
    </Suspense>
  </Router>
}

export default Routes;