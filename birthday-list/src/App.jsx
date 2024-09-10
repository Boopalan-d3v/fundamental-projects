import data from './data'
import List from './List';
import {useState} from 'react'

const App = () => {
  const [item, setItem] = useState(data)

  const handleClick = () => {
    setItem([])
  }
  return <main>
    <section className='container'>
      <h3>{item.length} Birthdays Today</h3>
      <List item={item}/>
      <button type='button' className="btn btn-block" onClick={handleClick}>Clear all</button>
  </section>
  </main>
};
export default App;
