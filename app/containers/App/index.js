/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Layout } from 'antd';
import { Switch, Route } from 'react-router-dom';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import Header from '../../components/Header/Loadable';
import PersonalDetail from '../PersonalDetail/Loadable';
import Experience from '../Experience/Loadable';
import Footers from '../../components/Footers/Loadable';

import GlobalStyle from '../../global-styles';
const { Content } = Layout;

export default function App() {
  return (
    <Layout>
      <Header />
      <Content style={{ padding: '0 50px' }}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/" component={PersonalDetail} />
          <Route exact path="/" component={Experience} />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </Content>
      <Footers />
    </Layout>
  );
}
