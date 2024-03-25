import Profile from "../assets/profile.svg?react";

const  Personal= () => {
    return ( 
        <div className="fixed w-1/4">
            <div className="flex justify-center items-center border-x border-y border-slate-600 h-11 bg-black">
                <div className="my-2 text-lg">
                    Quoteverse
                </div>
            </div>
            <div>

                <div className="mx-6 my-10">
                    <div className="m-2">
                        <img src={Profile} alt="" />
                    </div>
                    <div className="m-2 text-lg font-bold">
                        <div>Anshuman Tiwari</div>
                    </div>
                    <div className="mx-2 my-1 text-sm">
                        <div>anshumantiwari</div>
                    </div>
                    <div className="my-5 mx-2">
                        <div>Frontend Developer | Let's redesign the world</div>
                    </div>
                    <div className="m-2 text-slate-500">
                        <div>2957 likes. </div>
                    </div>
                </div>

            </div>
        </div>
     );
}
 
export default Personal;