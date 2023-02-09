import logo from './logo.svg';
import './App.css';
import { lightTheme } from "./components/Themes";
import { ThemeProvider } from "styled-components";
import Main from './components/Main';
import { Routes, Route } from 'react-router-dom'
import WorkPage from './components/WorkPage';
import AboutPage from './components/AboutPage';
import MySkillpage from './components/MySkillpage';
import BlogPage from './components/BlogPage';
 import GlobalStyle from "./GlobalStyles";
import SoundBar from "./subComponents/SoundBar";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
    <GlobalStyle/>
    <ThemeProvider theme={lightTheme}>
        <SoundBar />
        <AnimatePresence exitBeforeEnter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/work' element={<WorkPage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/skills' element={<MySkillpage/>} />
        <Route path='/blog' element={<BlogPage/>} />
      </Routes>
    </div>
    </AnimatePresence>
    </ThemeProvider>
    </>
  );
}

export default App;
