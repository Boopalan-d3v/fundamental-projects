const url = 'https://www.course-api.com/react-tabs-project';
import {useEffect, useState} from 'react'
import Job from './Job';
import BtnContainer from './BtnContainer';
const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [currentItem, setCurrentItem] = useState(0)
  // currentItem
  const fetchData = async() =>{
    const response = await fetch(url)
    const newJobs = await response.json()
    setJobs(newJobs)
    setIsLoading(false)
  }  

  useEffect(() => {
    fetchData()
  }, [])

  if(isLoading){
    return <section className="jobs-center">
      <div className="loading"></div>
    </section>
  }

  return <section className="jobs-center">
    <BtnContainer jobs={jobs} currentItem = {currentItem} setCurrentItem = {setCurrentItem}/>
    <Job jobs={jobs} currentItem={currentItem}/>
  </section>;
};
export default App;
