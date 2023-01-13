import { Routes ,Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Missing from "./pages/Missing";
import Footer from "./components/Footer";
import FindCar from "./pages/FindCar";
import { DataProvider } from "./context/DataContext";
import Garage from "./pages/Garage";
import Search from "./forms/Search";
import Options from "./forms/Options";
import Model from "./forms/model";
import Type from "./forms/type";
import Year from "./forms/year";

function App() {
  return (
    <div className="App">
      <DataProvider>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about">
            <Route index="/" element={<About/>}/>
            <Route path=":id" element={<About/>}/>
          </Route>
          <Route path="/find_car" element={<FindCar/>}>
            <Route index={true} element={<Options/>}/>
            <Route path="search" element={<Search/>}/>
            <Route path="model" element={<Model/>}/>
            <Route path="type" element={<Type/>}/>
            <Route path="year" element={<Year/>}/>
          </Route>
          <Route path="/Garage" element={<Garage/>}/>
          <Route path="*" element={<Missing/>}/>
        </Routes>
      <Footer/>
      </DataProvider>
    </div>
  );
}

export default App;
