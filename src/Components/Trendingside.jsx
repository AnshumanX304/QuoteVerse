import axios from "axios";
import Sidebar from "../assets/Sidebar.svg?react";
import Settings from "../assets/settings.svg?react";
import { useEffect,useState } from "react";

const Trending = (props) => {
    const [trending,setTrending]=useState([]);

    useEffect(()=>{
        gettrending();
    },[])

    const gettrending=async ()=>{
        const trenddata=await axios.get("https://api.quotable.io/tags?sortBy=quoteCount");
        // console.log(trenddata.data)
        setTrending(trenddata.data);
    }

    
    
    return ( 
        <div className="fixed w-full h-screen bg-black ease-in duration-300" >
            <div className="p-10">
                <div>
                    <div className="flex justify-between">
                        <div className="text-lg">Trending Topics</div>
                        <div className="mt-1"><img src={Settings} alt="" /></div>
                    </div>
                    <div>
                        <div className="text-sm my-6 text-sky-600">Show all quotes</div>
                    </div>
                    <div>
                    {trending?trending.map(trend => <Trend trend={trend} key={trend._id}  posts={props.posts} setPosts={props.setPosts}/>):<div>loading</div>}
                    </div>
                </div>
            </div>
        </div>
     );
}

function Trend({trend,posts,setPosts}){
    async function getnewPosts(props){
         const data=await axios.get("https://api.quotable.io/quotes?tags="+props);
        //  console.log(data);
         setPosts(data.data.results);
    }
    return(
        <div className="mb-6">
            <div className=" font-extralight text-sm mb text-slate-500 ">
                {trend.name.toUpperCase()}
            </div>
            <div className=" my-1 font-medium text-sm cursor-pointer" onClick={()=>getnewPosts(trend.slug)}>
                #{trend.slug}
            </div>
            <div className=" font-extralight text-slate-500 text-xs">
                {trend.quoteCount} quotes
            </div>
        </div>
    )
}
 
export default Trending;