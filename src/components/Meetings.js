import {React,useEffect, useState} from 'react'
import { apiUrl } from '../config'
import { Link } from 'react-router-dom';


const Meetings = () => {
    const [data, setdata] = useState([])
    let url = `${apiUrl}/meetinglinks/fetch`;
    const getlinks = async()=>{
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      console.log(json);
      setdata(json);
    }
    useEffect(() => {
      // eslint-disable-next-line
      getlinks();
      // eslint-disable-next-line
    }, [])
    
  return (
    <div className="Meeting h-screen w-screen flex flex-col items-center justify-center" >
        <h1 className='text-4xl p-4'>Links of all meetings</h1>
        {data.map(({ name, src }) => {
            return (
              <div className="bg-white w-[500px] h-[80px] flex flex-col justify-center items-center rounded-full mb-3">
                <h1 className='text-2xl font-bold'>{name}</h1>
                {/* <p>{src}</p> */}
                <Link to={src} target='_blank'>click to navigate</Link>
              </div>
            );
          })}
    </div>
  )
}

export default Meetings
