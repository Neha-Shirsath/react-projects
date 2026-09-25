import { useState } from "react";

const User = ({name, email}) => {

    const [count] = useState(0)
    const [count2] = useState(1)

    return (
        <div className="user">
            <h3>Members count: {count}, {count2}</h3>
            <h2>Name: {name}</h2>
            <h2>Email : {email}</h2>
        </div>
    )
}

export default User;