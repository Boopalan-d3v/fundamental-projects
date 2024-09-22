import {useState} from 'react'
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
      <h2 className='title'>Tired of Boring Lorem Ipsum</h2>
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
        <article className='lorem-text'>
          {text.map((item, index) => {
            return <p key={index}>{item}</p>
          })}
        </article>
      </form>
    </section>
  );
};
export default App;
