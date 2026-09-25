import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>ABOUT US</h1>
            <h3>New age consumer-first organization offering an easy-to-use convenience platform, accessible through a unified app</h3>
            < User name="Neha" email="neha@123"/><br/>
            < UserClass name="Lana" email="lana@456"/>
        </div>
    )
}

export default About;