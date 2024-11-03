
import Header from './components/Header';
import LengthProfile from './components/LengthProfile';
import './global.css';
import Main from './page/Main';
import { Route, Router, Routes } from 'react-router-dom';


function App() {




  return (
    <>
      <Header />
      {/* <LengthProfile /> */}
      <Main />
      <Routes>
        <Route path='/' element={<Header />} />
      </Routes>
    </>

  );
}

export default App;
