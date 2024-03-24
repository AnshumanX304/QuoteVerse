import axios from "axios";
import Sidebar from "../assets/Sidebar.svg?react";
import Settings from "../assets/settings.svg?react";
import { useEffect,useState } from "react";

const Trending = () => {
    const [trending,setTrending]=useState([]);

    useEffect(()=>{
        gettrending();
    },[])

    const gettrending=async ()=>{
        const trenddata=await axios.get("https://api.quotable.io/tags");
        console.log(trenddata.data)
        setTrending(trenddata.data);
    }
    
    return ( 
        <div>
            <div className="flex flex-row-reverse border-b border-slate-600 h-11">
                <div className="my-4 mx-4 text-lg">
                    <img src={Sidebar} alt="" />
                </div>
            </div>
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
                    {trending?trending.map(trend => <Trend trend={trend} key={trend._id} />):<div>loading</div>}
                    </div>
                </div>
            </div>
        </div>
     );
}

function Trend({trend}){
    return(
        <div className="mb-6">
            <div className=" font-extralight text-sm mb text-slate-500">
                {trend.name.toUpperCase()}
            </div>
            <div className=" my-1 font-medium text-sm">
                #{trend.slug}
            </div>
            <div className=" font-extralight text-slate-500 text-xs">
                {trend.quoteCount} quotes
            </div>
        </div>
    )
}
 
export default Trending;