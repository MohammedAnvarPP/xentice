import React ,{useState} from 'react';
import axios from 'axios'

const Hero = () => {
    const [ApiData, setApiData] = useState([]);

    axios.get("https://api.xentice.com/api/postadSelect").then((response)=>{
       let data = response.data.filter((item)=>{
            return item.id===49
        }).map((item)=>{
            console.log("ddd",item.images);
            return(
                <div>
                <img src={item.images} alt="" />
                </div>
            )
        })
        setApiData()
        // console.log(data);
    })
    

    return (
        <div>
            {data}
        hero
        </div>
    );
  
}
export default Hero;
