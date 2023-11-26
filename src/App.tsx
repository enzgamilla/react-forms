import "bootstrap/dist/css/bootstrap.css";
import Form from "./assets/Form";
import { useState } from "react";

function App() {
  const [person, setPerson] = useState({
    name: "",
    age: 0,
  });

  console.log(person);

  return (
    <div className="container">
      <Form></Form>
    </div>
  );
}

export default App;
