import { useState} from 'react'
import data from './data'
import Questions from './Questions'
function App() {
  const [questions, setQuestions] = useState(data)
  const [activeid, setActiveid] = useState(null)
  const toggleQuestion = (id) => {
    console.log(id)
    const newActiveid = id === activeid ? null : id;
    setActiveid(newActiveid)
  }
  return (
    <main>
      <Questions questions={questions}
      activeid={activeid}
      toggleQuestion={toggleQuestion} />
    </main>
  )
}
export default App
