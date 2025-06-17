import { useState } from "react";
import Navbar from "./components/navbar";
import Newboard from "./components/newboard";

const App = () => {
  const [category, setcategory] = useState("general");

  return (
    <div>
      <Navbar setcategory={setcategory}/>
      <Newboard category={category}/>
    </div>
  )
}

export default App
