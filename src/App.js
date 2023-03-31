import "./App.css";
import Page01 from "./components/Page01";
import Page02 from "./components/Page02";
import page03 from "./images/page03.png";
import Page04 from "./components/Page04";
import Page05 from "./components/Page05";
import Page06 from "./components/Page06";
import Page07 from "./components/Page07";
import Page08 from "./components/Page08";
import Page09 from "./components/Page09";

function App() {
  return (
    <div className="App">
      <Page01 />
      <Page02 />
      <img src={page03} alt="wp02" className="wp02-image" />
      <Page04 />
      <Page05 />
      <Page06 />
      <Page07 />
      <Page08 />
      <Page09 />
    </div>
  );
}

export default App;
