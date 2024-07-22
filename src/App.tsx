import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
const Articles = lazy(() => import("./pages/Articles"));
const ArticleDetail = lazy(() => import("./pages/ArticleDetail"));
const NavBar = lazy(()=>import("pages/Navbar/index"));

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Articles />}></Route>
            <Route path="/article-detail" element={<ArticleDetail />}></Route>
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
