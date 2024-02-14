import Card from "./components/card";

function App() {
  return (
    <div>
      <h3 className="text-3xl bg-green-400 p-3 rounded-md">this is a tailwind component using the props..</h3>
      <div className="flex">
        <div>
        <Card title_card="Noteworthy technology acquisitions 2021"
        discribe="Here are the biggest enterprise technology acquisitions of
          2021 so far, in reverse chronological order."
        />
        <Card title_card="Great Day" discribe="Todays moto"/>
        </div>
        <div>
        <Card />
        <Card />
        </div>
        <div>
        <Card />
        <Card />
        </div>
      </div>
      
    </div>
  );
}

export default App;
