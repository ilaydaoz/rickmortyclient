import Header from "./components/Header";
import HomePage from "./components/HomePage";
import EpisodeCard from "./components/Episode/EpisodeCard";
import CharacterList from "./components/Character/CharacterList";

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <EpisodeCard />
      <CharacterList />
    </div>
  );
}

export default App;
