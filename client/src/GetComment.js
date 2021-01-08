import React, { useState, useEffect } from 'react'
import axios from 'axios'


export default ({ postsId}) => {

    const [content ,setContent] = useState([])

    const getComments = async() =>{ 
        const result = await axios.get(`http://localhost:4001/posts/${postsId}/comments`)
        setContent(result.data)
        console.log(result.data)

    };

    useEffect(()=>{
        getComments();
    },[]);
    const renderComments = content.map(comment=>{
        return  <li key={comment.id}>{comment.content}</li>

        
    })

    return <ul>

        {renderComments}
    </ul>
   
}