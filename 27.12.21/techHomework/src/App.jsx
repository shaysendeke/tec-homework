import "./App.css";
import PerformanceProblem from "./components/PerformanceProblem";
import PerformanceProblemUseCallback from "./components/PerformanceProblemUseCallback";
import useFetch from "./hooks/useFetch";

function App() {
  const fetchedData = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <div className="App">
      {/* {fetchedData.isLoading ? <div className="loader"></div> : ""}
      {fetchedData.error == null ? (
        fetchedData.info.map((item, i) => {
          return <p key={i}>{item.title}</p>;
        })
      ) : (
        <p style={{ color: "red" }}>ERROR</p>
      )} */}
      {/* <PerformanceProblem /> */}
    <PerformanceProblemUseCallback />
    </div>
  );
}

export default App;
