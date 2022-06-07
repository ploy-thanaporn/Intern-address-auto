import { useState } from "react";
import "./App.css";
import Content from "./component/Content";
import country from "./data/country.json";

function App() {
  const [province, setProvince] = useState(country);
  return (
    <div>
      <div className="container">
        <div className="mt-10 flex justify-center border-solid border-2 bg-zinc-100">
          <h2 className="mt-6 text-xl">ที่อยู่จัดส่ง</h2>
          <div className="m-10">
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
