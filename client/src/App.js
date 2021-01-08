import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import CreatePost from './CreatePost';
import GetPost from './getPosts';

export default () => {
    return (
        <div className="container">

            <p> Create New Post </p>
            <CreatePost />

            <p>Posts</p>
            <GetPost />
        </div>
    );
}