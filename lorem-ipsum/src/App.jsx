import {useState} from 'react'
const App = () => {
  const [ value, setValue] = useState(1)
  return (
    <section>
      {value}
    </section>
  );
};
export default App;
