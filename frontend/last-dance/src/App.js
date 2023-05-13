import "./App.css";
import { BlogList } from "./components/BlogList";
import { NewBlog } from "./components/NewsBlog";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BlogList />} />
      <Route path="/add" element={<NewBlog />} />
    </Routes>
  );
}

export default App;
