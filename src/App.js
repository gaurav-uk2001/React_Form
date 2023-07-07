import './App.css';
import Create from './Components/Create.js';
import Read from './Components/Read';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Update from './Components/Update';

function App() {
  return (
    <div className='container' >
      {/* browserRouter always under div */}
      {/* it uses to assign component with particular link like /read -> read component */}
      <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<Create/>}></Route>
      <Route path='/Read' element={<Read/>}></Route>
      <Route path='/Update' element={<Update/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
