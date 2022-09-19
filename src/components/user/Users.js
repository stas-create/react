import "./userCss.css"
import {useEffect, useState} from "react";
import {getUsers} from "../../services/users.api.axio";
import User from "./User";

export default function Users () {
    
    let [users,setUsers] = useState([]);
    let [user, setUser] = useState(null);

    const lift = (obj) => {
        setUser(obj);
    };



    useEffect(() => {
        getUsers().then((value => setUsers(value.data)))
    }, []);


    return (
        <div className='mainUser'>
            <h1 className='headUsers'>Users</h1>
            <hr/>
            <div className='info'>
                Username={user?.username} <br/> email-{user?.email} <br/> phone-{user?.phone}
            </div>
            <hr/>

            <div className='allUser'>{users.map(user => (<User item={user} lift={lift}/>))}</div>

        </div>
    );
}