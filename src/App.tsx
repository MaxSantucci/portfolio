import './App.css';
import {Header} from './header/Header';
import {Home} from './home/Home';
import {Skills} from './skills/Skills';
import {Projects} from './projects/Projects';
import {Contact} from './contact/Contact';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
   return (
      <BrowserRouter>
         <div className="App">
            <Header/>
            <Routes>
               <Route path="/*" element={<Home/>}/>
               <Route path="/home" element={<Home/>}/>
               <Route path="/skills" element={<Skills/>}/>
               <Route path="/projects" element={<Projects/>}/>
               <Route path="/contact" element={<Contact/>}/>
            </Routes>
         </div>
      </BrowserRouter>
   );
}

export default App;
