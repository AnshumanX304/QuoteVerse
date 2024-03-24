import Home from "../assets/Home.svg?react";
import Like from "../assets/Like.svg?react";
import { useEffect } from "react";
import axios from "axios";
const Quotes = (props) => {

    useEffect(()=>{
        getposts();
    },[])

    async function getposts(){
        const posts=await axios.get("https://api.quotable.io/quotes/random?limit=10")
        console.log(posts);
        props.setPosts(posts.data);

    }
    return (
        <div>
            <div className="flex justify-evenly border-b border-slate-600 h-11">
                <div className="m-2">
                   <img src={Home} alt="" />
                </div>
                <div className="m-2">
                    <img src={Like} alt="" />
                </div>
            </div>
            <div>
            {props.posts?props.posts.map(post => <Post post={post} key={post._id} />):<div>loading</div>}
            </div>
            
        </div>
      );
}

function Post(){
    return(
        <div>Hello</div>
    )
}
 
export default Quotes;