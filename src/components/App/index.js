import React from 'react'
// import './styles.css'
import Homepage from '../Homepage'
import Login from '../Login'
import Register from '../Register'
import Dashboard from '../Dashboard'
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
// import { CssBaseline, CircularProgress } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import firebase from '../firebase'
import 'antd/dist/antd.css';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />            
                <Route exact path="/dashboard" component={Dashboard} />
            </Switch>
        </Router>
    )    
}

