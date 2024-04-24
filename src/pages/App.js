import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './HomePage';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import CreateContactPage from './CreateContactPage';
import EditContactPage from './EditContactPage';
import ContactsListPage from './ContactsListPage';
import ContactDetailsPage from './ContactDetailsPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/contacts/create" component={CreateContactPage} />
        <Route path="/contacts/:id/edit" component={EditContactPage} />
        <Route path="/contacts/:id" component={ContactDetailsPage} />
        <Route path="/contacts" component={ContactsListPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
