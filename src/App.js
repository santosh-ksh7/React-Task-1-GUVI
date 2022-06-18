import logo from './logo.svg';
import './App.css';

function App() {

  let arr=[
    {
      type: "FREE",
      price: "$0",
      prop1: "✔ Single User",
      prop1state: "active",
      prop2: "✔ 5GB Storage",
      prop2state: "active",
      prop3: "✔ Unlimited Public Projects",
      prop3state: "active",
      prop4: "✔ Community Access",
      prop4state: "active",
      prop5: "✖ Unlimited Private Projects",
      prop5state: "notactive",
      prop6: "✖ Dedicated Phone Support",
      prop6state: "notactive",
      prop7: "✖ Free Subdomain",
      prop7state: "notactive",
      prop8: "✖ Monthly Status Reports",
      prop8state: "notactive"       
    },
    {
      type: "PLUS",
      price: "$9",
      prop1: "✔ 5 Users",
      prop1state: "active",
      prop2: "✔ 50GB Storage",
      prop2state: "active",
      prop3: "✔ Unlimited Public Projects",
      prop3state: "active",
      prop4: "✔ Community Access",
      prop4state: "active",
      prop5: "✔ Unlimited Private Projects",
      prop5state: "active",
      prop6: "✔ Dedicated Phone Support",
      prop6state: "active",
      prop7: "✔ Free Subdomain",
      prop7state: "active",
      prop8: "✖ Monthly Status Reports",
      prop8state: "notactive"       
    },
    {
      type: "PRO",
      price: "$49",
      prop1: "✔ Unlimited Users",
      prop1state: "active",
      prop2: "✔ 150GB Storage",
      prop2state: "active",
      prop3: "✔ Unlimited Public Projects",
      prop3state: "active",
      prop4: "✔ Community Access",
      prop4state: "active",
      prop5: "✔ Unlimited Private Projects",
      prop5state: "active",
      prop6: "✔ Dedicated Phone Support",
      prop6state: "active",
      prop7: "✔ Unlimited Free Subdomain",
      prop7state: "active",
      prop8: "✔ Monthly Status Reports",
      prop8state: "active"       
    }
  ];

  return (
    <div className='topmost'>
      <h1>React TASK-1 from GUVI</h1>
      <div className="main">
        {arr.map((ele)=> <Card arr={ele}/>)}
      </div>
    </div>
  );
}

export default App;


function Card({arr}){

  let state5 = arr.prop5state;
  let state6 = arr.prop6state;
  let state7 = arr.prop7state;
  let state8 = arr.prop8state;

  const styles1 = {
    color: "grey"
  }

  const styles2 = {
    color: "black"
  }

  return(
    <div className='secondary'>
      <div className="upper1">
        <p className='first'>{arr.type}</p>
        <p className='second'><span className='secondfirst'>{arr.price}</span>/month</p>
      </div>
      <hr />
      <div className="upper2">
        <p><strong>{arr.prop1}</strong></p>
        <p>{arr.prop2}</p>
        <p>{arr.prop3}</p>
        <p>{arr.prop4}</p>
        <p style={state5==="notactive" ? styles1 : styles2}>{arr.prop5}</p>
        <p style={state6==="notactive" ? styles1 : styles2}>{arr.prop6}</p>
        <p style={state7==="notactive" ? styles1 : styles2}>{arr.prop7}</p>
        <p style={state8==="notactive" ? styles1 : styles2}>{arr.prop8}</p>
      </div>
      <div className="upper3">
        <button>BUTTON</button>
      </div>
    </div>
  )
}