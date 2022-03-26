import React from "react";
import {Link} from 'react-router-dom';
import './User.css';

function User() {

    const [users, setUsers] = React.useState([])

    const [filteredUser, setFilteredUser] = React.useState([]);

    const filterUser = (evt) => {
        const targetValue = evt.target.value.trim();
        const filteredUsersArray = users.filter(
          (user) =>
            user.username.toLowerCase().includes(targetValue) ||
            user.name.toLowerCase().includes(targetValue)
        );
    
        if (targetValue.length === 0) {
          setFilteredUser(users);
        } else {
          setFilteredUser(filteredUsersArray);
        }
    
        console.log(filteredUser);
      };

    React.useEffect(()=>{
        (async()=>{
            const res = await fetch("https://jsonplaceholder.typicode.com/users");

            const data = await res.json();

            if(data){
                setUsers(data)
                setFilteredUser(data)
            }
        })();
    }, []);

    return(
        <main>
            <input className="input__user" type="text" onChange={filterUser} />
        
        <ul className="user__list">

        {
            filteredUser && filteredUser.map(user => (
                <li className="user__item" key={user.id}>

                    <h2>{user.name}</h2>
                    <i>{user.username}</i>
                    <p>{user.mail}</p>

                    <Link className="user__link" to={"/posts/" + user.id}>Posts</Link>
                </li>
            ))

        }

        </ul>

        </main>
    )
}

export default User;