import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import './Comments.css';

const Comments = () => {
    const navigate = useNavigate();
    const { postId } = useParams();
    const [comments, setCommnets] = React.useState([]);
    
    
    React.useEffect(() => {
        (async () => {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/comments?postId=" + postId
                );
                
                const data = await response.json();
                
                if (data) {
                    setCommnets(data);
                }
            })();
        }, [postId]);
        
        return (
            <main>
            <button onClick={() => navigate(-1)}>Back</button>
            
            <ul className="comments__list">
            {comments &&
                comments.map((comment) => (
                    <li className="comments__item" key={comment.id}>
                    <number>
                    {comment.id}
                    </number>
                    <h3>{comment.name}</h3>
                    <i>{comment.email}</i>
                    <p>{comment.body}</p>
                    </li>
                    ))}
                    </ul>
                    </main>
                    );
                };
                
                export default Comments;
                