import {useState} from 'react'
import { nanoid } from 'nanoid';
import data from './data';
const App = () => {
  const [ count, setCount] = useState(1)
  const [ text, setText] = useState([])

  const handleChange = (e) => {
    setCount(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = parseInt(count)
    setText(data.slice(0,amount))
  }

  return (
    <section className='section-center'>
      <h4 className='title'>Tired of Boring Lorem Ipsum</h4>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraph:</label>
        <input 
          type='number' 
          id='amount' 
          name='amount' 
          min='1' 
          step='1' 
          max='8' 
          value={count} 
          onChange={handleChange}>
        </input>
        <button type='submit' className='btn'>generate</button>
      </form>
      <article className='lorem-text'>
        {text.map((item) => {
          return <p key={nanoid()}>{item}</p>
        })}
      </article>
    </section>
  );
};
export default App;
