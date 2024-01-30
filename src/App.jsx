import './App.css'
import MovieProvider from "./Context/movieContext";
import Homepage from "./Page/Homepage";



const App = () => {


  return (
    <MovieProvider >
      <Homepage />
    </MovieProvider>
  );
};

export default App;
