// BrowserRouter의 차이점은 URL의 생김새에 있다.
// http://localhost:3000/movie
// URL은 우리들이 예상하는대로 생겼음 보통의 웹사이트처럼
// HashRouter은 뒤에 #이 붙는다.
// http://localhost:3000/#/movie
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie">
          {/* <Route index element={<Home />} /> */}
          <Route path=":id" element={<Detail />} />
        </Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
