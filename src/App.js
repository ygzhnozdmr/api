import { useState } from 'react';
import './App.css';
import searchImages from './components/api';
import HeaderBar from './components/header';
import ListItem from './components/itemlist';



function App() {
  const [images, setImages] = useState([])
  const searchHandler = async (term) => {
    const result = await searchImages(term);
    setImages(result);
     }

  return (
    <div className="App">
   <HeaderBar search={searchHandler}/>

   <ListItem imagePlaceholder={images}/>  
    </div>
  );
}

export default App;
