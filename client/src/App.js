import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/ping")
      .then(res => setMessage(res.data.message))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary">
        PGLife – Interactive Accommodation Finder
      </h1>
      <p className="text-center mt-3">{message}</p>
    </div>
  );
}

export default App;
