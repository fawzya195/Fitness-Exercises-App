
import { Route, Routes } from 'react-router';
import './App.css';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ExerciseExamble from "./Pages/ExerciseExamble";
import Box from "@mui/material/Box";

function App() {
  return (
    <Box width="400px" sx={{width:{xl:"1488px"}}} m="auto">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/exercise/:id' element={<ExerciseExamble/>} />
     
      </Routes>
      <Footer />

    </Box>
  );
}

export default App;

