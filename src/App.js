import "./App.css";
import VideoElement from "./components/VideoElement/VideoElement";
import Button from "./components/Button/Button";
import Paragraph from "./components/Paragraph/Paragraph";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <VideoElement />
        <div className="App-Buttons">
          <Button text="RoadMap" url="https://www.github.com" />
          <Button text="Resources" url="https://www.github.com" />
        </div>
        <Paragraph>
          Shoom was a weekly all-nighter dance music event held at nightclubs in
          London, England, between December 1987 and early 1990. It is widely
          credited with initiating the acid house movement in the UK. Shoom was
          founded by Danny Rampling and managed by his wife Jenni. It began at a
          300-capacity basement gym on Southwark Street in South London.
        </Paragraph>
        <Paragraph>
          Shoom was a weekly all-nighter dance music event held at nightclubs in
          London, England, between December 1987 and early 1990. It is widely
          credited with initiating the acid house movement in the UK. Shoom was
          founded by Danny Rampling and managed by his wife Jenni. It began at a
          300-capacity basement gym on Southwark Street in South London.
        </Paragraph>
      </header>
    </div>
  );
}

export default App;
