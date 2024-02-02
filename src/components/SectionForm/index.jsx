import { useState } from 'react'

import './styles.css'
export default function SectionForm({title,addComment}){
    const [email, setEmail] = useState()
    const [comment, setComment] = useState()

    const submit = (ev)=> {
        ev.preventDefault()

        const newComment = {
            key: Math.floor(Math.random() * 1000000),
            email: email,
            comment: comment,
            date: new Date()
        }
       
        console.log(newComment)
        addComment(newComment)
        setEmail("")
    }

    return(
        <form onSubmit={submit}>
            <h3>{title}</h3>
            <label htmlFor="email">Email </label>
            <input type="email" id="email" value={email} onChange={ev => setEmail(ev.target.value) }/>
            <label htmlFor="comment">Comentário</label>
            <textarea id="comment" value={comment} onChange={ev => setComment(ev.target.value)}></textarea>
            <button>Enviar comentário</button>
            <hr />
        </form>
           
       
    )
}