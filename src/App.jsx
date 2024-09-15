
import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePage from "./Components/HomePage";
import Quiz from './Components/Quiz';
import CodeEditor from './Components/CodeEditor';
import Layout from "./Components/Layout";

const App = () => {
  return (
    <Router>
      <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/code-editor" element={<CodeEditor />} />
      </Routes>
      </Layout>
    </Router>
  )
};

export default App;
