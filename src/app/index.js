
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { App } from './containers/App';
import { Home } from './containers/Home';
import { Dashboard } from './containers/dashboard/Dashboard';
import { PostApp} from './containers/dashboard/post/PostApp';
import { PostManage} from './containers/dashboard/post/PostManage';
import { CreatePost} from './containers/dashboard/post/CreatePost';
import { UpdatePost } from './containers/dashboard/post/UpdatePost';

import { ImageManage } from './containers/dashboard/ImageManage';
import { CategoriesContainer} from './containers/dashboard/categories/CategoriesContainer';

import {Articles } from './containers/articles/Articles';
import {ArticlesCategory} from './containers/articles/ArticlesCategory';
import {ArticleContainer} from './containers/articles/ArticleContainer';
import {LoginContainer} from './containers/login/LoginContainer';
import {NotFound} from './components/static/NotFound';
import {About} from './components/static/About';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="articles" component={Articles}/>
        <Route path="articles/:category" component={ArticlesCategory}/>
        <Route path="article/:slug" component={ArticleContainer}/>
        <Route path="dashboard" component={Dashboard}>
            <IndexRoute component={LoginContainer}/>
            <Route path="post" component={PostApp}>
                <IndexRoute component={PostManage}/>
                <Route path="new" component={CreatePost}/>
                <Route path="update/:id" component={UpdatePost}/>
            </Route>
            <Route path="media" component={ImageManage} />
            <Route path="categories" component={CategoriesContainer} />
        </Route>
        <Route path="about" component={About}/>
        <Route path="*" component={NotFound}/>
    </Route>
)
