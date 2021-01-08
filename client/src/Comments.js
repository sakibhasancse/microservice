import axios from 'axios'
import React, { useState } from 'react'
export default ({postId}) => {

    const [content ,setContent] = useState('')
    const submitNewCommand = async(e)=>{ 
        e.preventDefault();
        await axios.post(`http://localhost:4001/posts/${postId}/comments` ,{content}).then(result => {
               setContent('')
        }).catch(err => {
            console.log(err)
        })

    }
    return (
        <div>
            <form onSubmit={submitNewCommand}>
                
                <div className="form-group">
                    <label for="name" >New Comment</label>
                    <input value={content} onChange={e=>setContent(e.target.value) } type="text" className="form-control" />

                </div>
<button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}