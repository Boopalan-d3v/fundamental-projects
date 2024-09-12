import {useEffect, useState} from 'react'
import Loading from './Components/loading';
import Tours from './Components/tours';
const url = 'https://www.course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])

  const removeTour = (id) => {
    const newTour = data.filter((tour) => tour.id !== id)
    setData(newTour)
  }

  const fetchTour = async() =>{
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const tours = await response.json()
      setData(tours);
      
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false)
  }

  useEffect(()=>{
    fetchTour()
  },[])

  if(isLoading){
    return <main>
      <Loading/>
    </main>
  }

  if(data.length == 0 ){
    return <main>
      <div className="title">
        <h2>No tours left</h2>
        <button type='button' className='btn' style={{marginTop:'2rem'}} onClick={()=> fetchTour()}>refresh</button>
      </div>
    </main>
  }
  return <main>
    <Tours tours={data} removeTour={removeTour}/>
  </main>
};
export default App;
