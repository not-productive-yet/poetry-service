import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [poem, setPoem] = useState({});

  useEffect(() => {
    getRandomPoem();
  }, []);

  function getRandomPoem() {
    console.log("hell");
    axios.get("https://poetrydb.org/random").then(function (response) {
      console.log(response.data[0].lines);
      setPoem(response.data[0]);
    });
  }
  if (!poem) return null;

  return (
    <div className="content">
      <div>
        <div className="poem-title">{poem.title}</div>
        <div className="poem-author">{poem.author}</div>
      </div>

      <div className="poem-lines">
        {poem.lines ? poem.lines.map((line) => <li>{line}</li>) : ""}
      </div>
      <button class="button" onClick={getRandomPoem}>
        next
      </button>
    </div>
  );
}

export default App;
