import React from 'react'; 
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
//import Posts from './components/Posts/Posts'; 
//import Form from './components/Form/Form';
//import useStyles from './styles'
//import {useDispatch} from 'react-redux';
import { Container } from '@material-ui/core';
//import {getPosts} from './actions/posts';
import Navbar from './components/navbar/navbar';
import Home from './components/home/Home';
import Auth from './components/Auth/Auth'
import PostDetails from './components/postDetails/PostDetails'
const App = () =>(
   <GoogleOAuthProvider clientId="579357536198-qets8tt1prtdih05t115i785jf5lqflj.apps.googleusercontent.com">
 <BrowserRouter>
 <container maxWidth="xxl">
    
<Navbar/>
<Routes>
    
    <Route exact path="/" element={<Home />} />
    <Route exact path="/posts" element={<Home/>}/>
    <Route exact path="/posts/search" element={<Home/>}/>
    <Route  path="/posts/:id" element={<PostDetails/>}/>
 
    <Route exact path="/Auth" element={<Auth />} />
</Routes>

</container>

</BrowserRouter>
</GoogleOAuthProvider>

);
export default App; 