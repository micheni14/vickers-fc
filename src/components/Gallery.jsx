import React from "react";
import image1 from "../assets/Gallery/image (1).jpeg";
import image2 from "../assets/Gallery/image (2).jpeg";
import image3 from "../assets/Gallery/image (3).jpeg";
import image4 from "../assets/Gallery/image (4).jpeg";
import image5 from "../assets/Gallery/image (5).jpeg";
import image6 from "../assets/Gallery/image (6).jpeg";
import image7 from "../assets/Gallery/image (7).jpeg";
import image8 from "../assets/Gallery/image (8).jpeg";
import image9 from "../assets/Gallery/image (9).jpeg";
import image10 from "../assets/Gallery/image (10).jpeg";
import image11 from "../assets/Gallery/image (11).jpeg";
import image12 from "../assets/Gallery/image (12).jpeg";
import image13 from "../assets/Gallery/image (13).jpeg";
import image14 from "../assets/Gallery/image (14).jpeg";
import image16 from "../assets/Gallery/image (16).jpeg";
import image17 from "../assets/Gallery/image (17).jpeg";
import image18 from "../assets/Gallery/image (18).jpeg";
import image19 from "../assets/Gallery/image (19).jpeg";
import image20 from "../assets/Gallery/image (20).jpeg";
import image21 from "../assets/Gallery/image (21).jpeg";
import image22 from "../assets/Gallery/image (22).jpeg";
import image24 from "../assets/Gallery/image (24).jpeg";
import image25 from "../assets/Gallery/image (25).jpeg";
import image26 from "../assets/Gallery/image (26).jpeg";
import image27 from "../assets/Gallery/image (27).jpeg";
const Gallery = () => {
    return (
    <div
    id="gallery">
        {/* <h1 class="text-4xl text-ourRed  text-center "> Gallery</h1> */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 bg-gray-50 ">
                <div className="grid  md:grid-cols-2  gap-4 md:h-[580px]" >
                
                    <div>
                        <img classname="w-full h-full "src={image1} alt="Gallery" />
                    </div>
                            {/* Player's Div */}
                    <div className="grid grid-cols-4 md:grid-cols-4 gap-1.5 w-full  object-cover h-[600px] overflow-scroll md:h-98" id="gallery-grid">
                        
                        {itemData.map((image) => (
                        <div key={image.id} className="h-46 flex justify-center bg-gray-200">
                            <img className="rounded h-full w-full object-cover "
                    src={`${image.img}`}
                        alt="Gallery"
                            
                            />
                        </div>
                        ))}
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
const itemData =[

    {
        id:5,
        img:`${image5}`
    },
    {
        id:3,
        img:`${image3}`
    },
    {
        id:4,
        img:`${image4}`
    },
    {
        id:2,
        img:`${image2}`
    },
    {
        id:6,
        img:`${image6}`
    },
    {
        id:7,
        img:`${image7}`
    },
    {
        id:8,
        img:`${image8}`
    },
    {
        id:9,
        img:`${image9}`
    },
    {
        id:11,
        img:`${image11}`
    },
    {
        id:12,
        img:`${image12}`
    },
    {
        id:13,
        img:`${image13}`
    },
    {
        id:14,
        img:`${image14}`
    },
    {
    id:24,
    img:`${image24}`
    },
    {
        id:16,
        img:`${image16}`
    },
    {
        id:17,
        img:`${image17}`
    },
    {
        id:18,
        img:`${image18}`
    },
    {
        id:19,
        img:`${image19}`
    },
    {
        id:20,
        img:`${image20}`
    },
    {
        id:21,
        img:`${image21}`
    },
    {
        id:22,
        img:`${image22}`
    },
    {
        id:24,
        img:`${image4}`
    },
    {
        id:25,
        img:`${image25}`
    },
    {
        id:26,
        img:`${image26}`
    },
    {
        id:27,
        img:`${image27}`
    }
    
] 



export default Gallery;