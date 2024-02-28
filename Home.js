import Bloglist from "./bloglist";
import useFetch from "./useFetch";

const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
    //     [{title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
    //     {title: 'Welcome Party!', body: 'lorem ipsum...', author: 'yoshi', id: 2},
    //     {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3}
    // ])

    // const [name, setName] = useState('mario');
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter((blog) => blog.id !== id);
    //     setBlogs(newBlogs);
    // }
    
    // const [name, setName] = useState('mario');
    // const [age, setAge] = useState(25);
    // const handleClick = () => {
    //     setName('luigi');
    //     setAge(30);
        // console.log('hello, ninjas', e);
    // }
    // let name = 'mario';
    // const handleClickAgain = (name, e) =>{
    //     console.log('hello ' + name, e.target);
    // }
    return (  
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <Bloglist blogs = {blogs} title = "All Blogs!" />} 
            {/* <button onClick = {() => setName('luigi')}>change name</button> */}
            {/* <p>{name}</p> */}
            {/* <Bloglist blogs = {blogs.filter((blog) => blog.author === 'mario')} title = "Mario's Blogs!"/> */}
            {/* <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick = {handleClick}>Click me</button> */}
            {/* <button onClick = {(e) => (handleClickAgain(name, e))}>Click me again</button> */}
        </div>
    );
}
 
export default Home;