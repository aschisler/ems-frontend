import ListEmployeeComponent from "./components/ListEmployeeComponent.jsx";
import HeaderComponent from "./components/HeaderComponent.jsx";
import FooterComponent from "./components/FooterComponent.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  return (
    <>
        <BrowserRouter>
            <HeaderComponent/>
            <Routes>
                {/*http://localhost:3000*/}
                <Route path="/" element={<ListEmployeeComponent />} />
                {/*http://localhost:3000/employees*/}
                <Route path="/employees" element={<ListEmployeeComponent />} />
            </Routes>
            <FooterComponent/>
        </BrowserRouter>
    </>
  )
}

export default App
