const User = ({name, email}) => {

    return (
        <div className="user">
            <h2>Name: {name}</h2>
            <h3>Email : {email}</h3>
        </div>
    )
}

export default User;