import { useState } from 'react'
import SectionForm from './components/SectionForm'
import Comment from './components/Comment'

function App() {
  const [comments, setComments] = useState([])

  const addComment = (newComment) => {
    // const newComment = {email, comment}
    setComments((state) => [newComment, ...state])
  }

 
  return (
    <div className="app">
      <SectionForm title={"Seção de Comentários"} addComment={addComment} />
        {comments.length > 0 ?
      (comments.map((comment)=>(
        <Comment 
          key={comment.id}
          email={comment.email}
          comment={comment.comment}  
          date={comment.date.toLocaleDateString()}
        />
      ))):
        <h4>Nenhum comentário para mostrar...</h4>
      }
    </div>
  )
}

export default App
