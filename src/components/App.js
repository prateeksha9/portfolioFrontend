import { Footer, Header, Front, Page404, Poem, Projects, Sketch } from '.';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div>
          <Footer />
          <Routes>
            <Route path="/" element={<Front />} />
            <Route path="/poem" element={<Poem />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/sketch" element={<Sketch />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
        {/* <Cover /> */}
      </div>
    </Router>
  );
}

export default App;
