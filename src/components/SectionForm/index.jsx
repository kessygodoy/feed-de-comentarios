import { useState } from 'react'

import './styles.css'
export default function SectionForm({title,addComment}){
    

    const submit = (ev)=> {
        ev.preventDefault();
        addComment({email, comment})
    }

    return(
        <form action={() => submit}>
            <h3>{title}</h3>
            <label htmlFor="email">Email </label>
            <input type="email" id="email" />
            <label htmlFor="comment">Comentário</label>
            <input type="textarea" id="comment"/>
            <button>Enviar comentário</button>
            <hr />
        </form>
           
       
    )
}