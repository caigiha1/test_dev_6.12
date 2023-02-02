import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import FeaturedSection from "./scenes/featuredsection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App w-[1440px] bg-background-primary ">
      <FeaturedSection />
    </div>
  );
}

export default App;
