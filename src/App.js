import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Cards from './components/Cards'
import Spinner from './components/Spinner'
import { filter, apiUrl } from './data'
import { toast } from 'react-toastify'
function App() {
  const [data, dataSetter] = useState([]);
  const [category, setCategory] = useState(filter[0].title);
  const [loading, setLoading] = useState(true);
  async function apiData() {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const output = await response.json();
      console.log("output", output.data);
      dataSetter(output.data);
    }
    catch (error) {
      console.log(error);
      toast.error("data not found")
    }
    setLoading(false);
  }
  useEffect(() => {
    apiData();
  }, [])
  console.log("data=>", data);


  return (
    <div className="App">
      <Navbar></Navbar>
      <Filter filter={filter} category={category} setCategory={setCategory}></Filter>
      {loading ? (<Spinner></Spinner>) : (<Cards data={data} category={category}></Cards>)}
    </div>
  );
}

export default App;
