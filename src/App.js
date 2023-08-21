import { Routes, Route } from 'react-router-dom';
import './App.css';
import BottomContainer from './Component/BottomContainer';
import Navbar from './Component/Navbar';
import PlayVideoContainer from './Component/PlayVideoContainer';
import SearchVideoCont from './Component/SearchVideoCont';
import { useState } from 'react';
import { getSearchVideos } from './services/getAPIData';

function App() {

  const [input,setInput] = useState([]);

  const getInputData = async (search)=>{
    const data = await getSearchVideos(search);
    setInput(data.items);
  }

  return (
    <div className='h-screen bg-black'>
      <Navbar getInp={getInputData} />
      <Routes>
        <Route path='/' element={<BottomContainer />}></Route>
        <Route path='/video/:id' element={<PlayVideoContainer />}></Route>
        <Route path='/search' element={<SearchVideoCont searchData = {input} />}></Route>
      </Routes>
    </div>   
  );
}

export default App;
