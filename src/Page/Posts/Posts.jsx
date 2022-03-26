import React from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Posts.css';

const Posts = () => {
    
    const navigate = useNavigate();
    
    const { userId } = useParams();

    console.log(userId);
    
    const [posts, setPosts] = React.useState([]);
    
    React.useEffect(()=>{
        (async()=>{
            const res = await fetch("https://jsonplaceholder.typicode.com/posts?userId=" + userId);
            
            const data = await res.json();

            console.log(data);
            
            if(data){
                setPosts(data)
            }
        })();
    },  [userId]);
    
    return(
        
        <main>
        <button onClick={()=> navigate(-1)}>Back</button>
        
        <ul className="posts__list">
        {
            posts && posts.map((post)=>(
                <li className="posts__item" key={post.id}>
                    <number>{post.id}</number>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <Link className="posts__link" to={"/comments/" + post.id}>Comments</Link>
                </li>
                ))
            }
            </ul> 
            </main>
            )
        }
        
        export default Posts;
        