import Home from "../assets/Home.svg?react";
import Like from "../assets/Like.svg?react";
import LikeC from "../assets/Like copy.svg?react";
import Comments from "../assets/Comment.svg?react";
import Share from "../assets/Send.svg?react";
import { useEffect,useState } from "react";
import axios from "axios";
import Profile from "../assets/profile.svg?react";
import Sidebar from "../assets/Sidebar.svg?react";
import Likered from "../assets/Likered.svg?react";
import "./styles.css"
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
            <div className="w-full flex justify-evenly border-y border-x border-slate-600 h-11 mb-5 lg:w-1/2 md:w-3/4 fixed bg-black">
                <div className="m-2">
                   <img src={Home} alt="" />
                </div>
                <div className="m-2">
                    <img src={Like} alt="" />
                </div>
                <div className="mt-3 block md:hidden">
                    <img src={Sidebar} alt="" />        
                </div>
            </div>
            <div className="pt-12">
            {props.posts?props.posts.map(post => <Post post={post} key={post._id} />):<div>loading</div>}
            </div>
            
        </div>
      );
}

function Post(props){
    const [isliked,setIsliked]=useState(false);

    function onLike(){
        if(isliked==true)setIsliked(false);
        else    setIsliked(true);
    }
    return(
        <div className="flex mb-7  border-slate-600 border-b">
            <div className="m-2 test" >
                <img src={Profile} height={40} width={40} className="m-2"alt=""/>
            </div>
            <div className="m-2 test2">
                <div className="m-2">
                    {props.post.author}
                </div>
                <div className="m-2">
                    {props.post.content}
                </div>
                <div className="flex flex-row">
                    <div className="mx-1" onClick={() => onLike()}>
                        {isliked?<img src={Likered} alt="" />:<img src={LikeC} alt="" />}
                    </div>
                    <div className="mx-1">
                        <img src={Comments} alt="" />
                    </div>
                    <div className="mx-1">
                        <img src={Share} alt="" />
                    </div>
                </div>
                <div className="m-2 text-slate-600">
                    {props.post.tags?props.post.tags.map(tag=><Tag data={tag} key={tag} />):<h1>no tags available</h1>}
                </div>
            </div>
        </div>
    )
}

function Tag(props){
    return(
        <span>{props.data} . </span>
    )
}
 
export default Quotes;