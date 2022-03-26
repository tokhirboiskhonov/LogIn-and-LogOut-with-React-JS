import React from "react";
import {Routes, Route} from 'react-router-dom'
import User from './Page/User/User';
import Posts from  './Page/Posts/Posts'
import Comments from './Page/Comments/Comments'

function AuthenticatedApp() {
    return <>
    <div className="container">
    <Routes>
    <Route path="/" element={<User/>}/>
    <Route path="/posts/:userId" element={<Posts/>}/>
    <Route path="/comments/:postId" element={<Comments/>}/>


    </Routes>
    </div>
    </>
}

export default AuthenticatedApp