import "./Pribor.css";
import priborData from "./data/priborData.js";
import Kartica from "./Kartica.jsx";

function Pribor() {
  return (
        <div className="pribor-container">
            <div className="row">
                {priborData.map((pribor, index) => (
                    <Kartica
                    putanja={pribor.putanja}
                    text={pribor.sadrzaj}
                    key={index}
                    />
                ))}
            </div>
        </div>
  
  );
}

export default Pribor;
