const heading = React.createElement(
    "h1",
    {id : "myheading"}, 
    "Hello from React!!!")

console.log(heading);//react Element => js obj

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading)//convert obj into html tag