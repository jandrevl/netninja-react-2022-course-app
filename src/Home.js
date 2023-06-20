// import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

   // const [blogs, setBlogs] = useState([
   //  { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
   //  { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
   //  { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
   // ]);

   // const [name, setName] = useState('mario');

  

   

   // const handleDelete = (id) => {
   //    const newBlogs = blogs.filter(blog => blog.id !== id);
   //    setBlogs(newBlogs);
   // }

   /* to use the data.json file as a database use the following command in the console:
   npx json-server --watch data/db.json --port 8000
   */

   const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
   
    return ( 
        <div className="home">
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div>}
           {blogs && <BlogList blogs={blogs} title="All Blogs" /*handleDelete = {handleDelete}*/ />}
           {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs"/> */}
           {/* <button onClick={() => setName('luigi')}>Change Name</button> */}
           {/* <p>{ name }</p> */}

        </div>
     );
}
 
export default Home;