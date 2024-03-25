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
// import Trendingside from "./Trendingside";
const Quotes = (props) => {
    const [ishome,setIshome]=useState(true);
    useEffect(()=>{
        getposts();
    },[])

    function toggleHome(){
        setIshome(true);
    }

    function toggleLike(){
        setIshome(false);
    }

    

    async function getposts(){
        const posts=await axios.get("https://api.quotable.io/quotes/random?limit=10")
        // console.log(posts);
        props.setPosts(posts.data);

    }
    return (
        <div>
            <div className="w-full flex justify-evenly border-y border-x border-slate-600 h-11 mb-5 lg:w-1/2 md:w-3/4 fixed bg-black">
                <div className="m-2">
                   <img src={Home} onClick={()=>toggleHome()} alt="" />
                </div>
                <div className="m-2">
                    <img src={Like} onClick={()=>toggleLike()} alt="" />
                </div>
                <div className="mt-3 block md:hidden" onClick={()=>toggleTrending()}>
                    <img src={Sidebar} alt="" />     
                </div>
                <div>

                </div>
            </div>
            <div className="pt-12">
            {ishome?<div>{props.posts?props.posts.map(post => <HomePost ishome={ishome} post={post} key={post._id} likedpost={props.likedpost} setLikedpost={props.setLikedpost} posts={props.posts} />):<div>loading</div>}</div>
            :
            <div>{props.likedpost?props.likedpost.map(post => <LikedPost ishome={ishome} post={post} key={post._id} likedpost={props.likedpost} setLikedpost={props.setLikedpost} posts={props.posts} />):<div>loading</div>}</div>}
            
            </div>
            
        </div>
      );
}

function HomePost(props){
    const [isliked,setIsliked]=useState(false);

    useEffect(()=>{
        let obj = props.likedpost.find(o => o._id === props.post._id);
        if(obj){
            setIsliked(true);
        }
    },[])

    function onLike(id){
        if(isliked==true){
            let obj = props.likedpost.find(o => o._id === id);

            // if(!obj){
            

                const filteredPeople = props.likedpost.filter((item) => item._id !== id);
                props.setLikedpost(filteredPeople)
                
                setIsliked(false);
            // }
        }
        else{
                console.log(props.likedposts);

            let obj = props.posts.find(o => o._id === id);
            let newposts = [obj, ...props.likedpost] 
            props.setLikedpost(newposts);
            setIsliked(true);
        }    
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
                        <div className="mx-1" onClick={() => onLike(props.post._id)}>
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


function LikedPost(props){
        const [isliked,setIsliked]=useState(true);

        function onLike(id){
            if(isliked==true){
            
                const filteredPeople = props.likedpost.filter((item) => item._id !== id);
                props.setLikedpost(filteredPeople)
                
                setIsliked(false);
            }
            else{
                let obj = props.posts.find(o => o._id === id);
                let newposts = [obj, ...props.likedpost] 
                props.setLikedpost(newposts);
                setIsliked(true);
            }    
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
                        <div className="mx-1" onClick={() => onLike(props.post._id)}>
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