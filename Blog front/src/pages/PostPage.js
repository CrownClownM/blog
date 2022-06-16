import React, { Fragment } from 'react'
import Welcome from '../componentes/Welcome'
import PostList from '../componentes/PostList'
import Navbar from '../componentes/Navbar'

const PostPage = ({data}) => (
    
    <Fragment>
        <Navbar/>
        <PostList 
            posts={data}
        />
    </Fragment>
)

export default PostPage