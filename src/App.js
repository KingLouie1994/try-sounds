import React from "react";
import "./App.css";

import useSound from "use-sound";
import testAudio from "./sounds/testAudio.mp3";

function App() {
  const [play] = useSound(testAudio);

  return (
    <div className="App">
      <button onClick={play}>Click me to play an audio</button>
    </div>
  );
}

export default App;
