import React, { useState } from "react";
import "./App.css";
function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100; // Convert height to meters
      const bmiValue = (weight / heightInMeters ** 2).toFixed(2);
      setBmi(bmiValue); 
      setMessage(getBMIMessage(bmiValue));
    } else {
      alert("Please enter valid weight and height!");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>BMI Calculator</h2>
      <div>
        <label>
          Weight (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter weight in kg"
          />
        </label>
      </div>
      <div>
        <label>
          Height (cm):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter height in cm"
          />
        </label>
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi && (
        <div>
          <h3>Your BMI: {bmi}</h3>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}

export default App;

// <>
//       <div className="project-title">
//         <h1>BMI Calculator Using React JS Mini Project 1</h1>
//       </div>

//       <div className="App">
//         <div className="heading">
//           <h2>BMI Calculator</h2>
//         </div>

//         <div className="app-content">
//           <form action="#">
//             <div className="weight-section">
//               <label htmlFor="weight">weight (kg)</label>
//               <input
//                 type="text"
//                 name="weight"
//                 id="weight"
//                 value={weight}
//                 placeholder="Enter your weight"
//               />
//             </div>

//             <div className="Height-section">
//               <label htmlFor="Height">Height (m)</label>

//               <input
//                 type="text"
//                 name="Height"
//                 id="Height"
//                 value={Height}
//                 placeholder="Enter your Height"
//               />
//             </div>

//             <div className="button-section">
//               <button className="btn" type="submit">
//                 Submit
//               </button>
//               <button
//                 className="btn btn-outline"
//                 onClick={reload}
//                 type="submit"
//               >
//                 Reload
//               </button>
//             </div>

//             <div className="output-section">
//               <h2>Your BMI is : {bmi}</h2>
//               <p>{message}</p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
