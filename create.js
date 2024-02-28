import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('yoshi');
    const [isPending, setIsPending] = useState(true);
    const history = useHistory();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        setIsPending(false);
        // console.log(blog);
        fetch('http://localhost:8000/blogs', {
            method: 'POST', 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(true);
            history.push('/');
        })
    } 

    return (
        <div className="create">
            <form onSubmit={handleSubmit}>
                <h2>Add a New Blog</h2>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label >Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}>
                </textarea>
                <label>Blog author:</label>
                <select 
                    value = {author}
                    onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {isPending && <button>Add Blog</button>}
                {!isPending && <button disabled>Adding blog</button>}
            </form>
        </div>
    );
}

export default Create;
