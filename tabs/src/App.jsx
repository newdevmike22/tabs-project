import { useEffect, useState } from "react";
import Jobinfo from "./components/Jobinfo";
import BtnContainer from "./components/BtnContainer";

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async() => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (isLoading) {
    return (
      <section className="w-[80vw] my-[5rem] mx-auto max-w-[1200px]">
        <div className="loading"></div>
      </section>
    )
  }

  return (
    <section className="w-[80vw] my-[5rem] mx-auto max-w-[1200px]">
      <BtnContainer jobs={jobs}/>
      <Jobinfo jobs={jobs}/>
    </section>
  )
};

export default App;