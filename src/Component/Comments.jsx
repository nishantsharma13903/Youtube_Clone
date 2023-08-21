import React, { useEffect, useState } from 'react'
import img from '../Images/acc3.webp'
import { getCommments } from '../services/getAPIData';
import { useLocation } from 'react-router-dom';
import CommentsCard from './CommentsCard';

export default function Comments() {

    const [comments,setComments] = useState([]);
    const location = useLocation();
    const vidId = location.state.vidId;

    const getData = async () => {
        const data = await getCommments(vidId);
        console.log(data.items);
        setComments(data.items);
    }

    useEffect(()=>{
        getData();
    },[])

  return (
    <div className='text-white'>
        <h1 className='border-b-2 my-8'>Comment</h1>
        {
            comments.map((comment) => {
                return <CommentsCard comm = {comment} />
            })
        }
        <p className='text-white mt-10 text-center'>No More Comments ... </p>
    </div>
  )
}
