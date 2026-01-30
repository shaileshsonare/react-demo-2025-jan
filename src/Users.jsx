import React, { useEffect, useState } from 'react'

import axios from 'axios';

export default function Users() {

    // let users = [
    //     { id: 1, login: "John" },
    //     { id: 2, login: "John2" },
    //     { id: 3, login: "John3" },
    //     { id: 4, login: "John4" },
    //     { id: 5, login: "John5" },
    // ]

    const [users, setUsers] = useState([])


    useEffect(() => {

        const url = "https://api.github.com/users";

        // fetch(url)
        //     .then(response => response.json())
        //     .then(data => setUsers(data))

        axios.get(url)
            .then(data => setUsers(data.data))

    }, [])

    return (
        <div>

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Login</th>
                        <th>Avatar</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        users.map((user) =>
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.login}</td>
                                <td><img src={user.avatar_url} alt="" width={"100px"} /></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

            {/* <ul>
                {
                    users.map((user) =>
                        <li key={user.id}>
                            {user.login}
                        </li>)
                }
            </ul> */}
        </div>
    )
}
