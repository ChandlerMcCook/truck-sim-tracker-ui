import './Homepage.css';
function Homepage() {
  var counter = 0;
  function updateCounter(){
    console.log("HERE");
    counter++;
  }
  return (
    <div className="newBg">
        <p>{counter}</p>
        <button onClick={updateCounter}>Click </button>
    </div>
  );
}

export default Homepage;
