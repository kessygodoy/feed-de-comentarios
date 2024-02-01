import { useState } from 'react'
import SectionForm from './components/SectionForm'
import Comment from './components/Comment'

function App() {
  const [comments, setComments] = useState([{date: "01/01/2024",email: "abc@abc.com",comment: "hello!"}])

  const addComment = ({email, comment}) => {
    const newComment = {email, comment}
    setComments([...comments, newComment])
  }

 
  return (
    <div className="app">
      <SectionForm title={"Seção de Comentários"} addComment={addComment} />
      {comments.map((comment)=>(
        <Comment 
          email={comment.email}
          comment={comment.comment}  
        />
      ))}
    </div>
  )
}

export default App
