import Multi from "./Components/Multi";

function App() {
  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
  ];
  return (
    <div className="App">
      <Multi tags={items}/>
    </div>
  );
}

export default App;
