import { useEffect, useState } from "react";

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
        <div>Is Loading</div>
      </section>
    )
  }

  return (
    <h1>Tabs</h1>
  )
};

export default App;