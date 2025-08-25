function App() {
  return (
    <>
    <div className="grid grid-cols-5 h-screen  text-center">
      <div className="col-span-1 bg-zinc-800 text-green-600">helloo</div>
      <div className="col-span-4">
        <div className="container h-96">

        </div>
        <div className="bg-zinc-800 w-1/2 text-white m-auto">
          <input type="text" placeholder="ask me anythink"/>
          <button>ask</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
