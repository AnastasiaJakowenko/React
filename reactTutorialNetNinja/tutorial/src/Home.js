import { useState } from "react";
import BlogList from "./blogList";

const Home = () => {

    const [blogs,setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])
  const handleDelete =(id)=>{
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(newBlogs)

  }
{/* wir sagen dasss wir die daten von Zeile 6(useState) in blog list verwenden möchten.
wir könnten auch diese arrays ausschneiden und in blogList hinzufügen. Wir machen eine variable 
namens blogs die gleich = blogs ( heir sien gemeint blogs aus usestate.Das heist props.
und wen wir diesen daten in unsere blogList component verwenden möchten
 sollen wir dort in const BlogList(props) schreiben und dort eine variable erstellen die wird auch blogs heisen = props.blogs ist*/}
  return (
    <div className="home">

      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} /> 
      
    </div>
  );
}
 
export default Home;