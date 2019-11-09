import React from 'react';
import { Route } from "react-router-dom"
import ArticleList from './components/containers/ArticlesList'
import ArticleDetials from './components/containers/ArticlesDetails'

const BaseRouter = () => {
    return (
      <div>
        <Route exact path="/" component={ArticleList} />
        <Route exact path="/:articleID" component={ArticleDetials} />
      </div>
    );
}
 
export default BaseRouter;
