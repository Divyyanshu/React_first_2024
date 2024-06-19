import "./App.css";
import Card from "./components/Card";
import bigUserData from "./MOCK_DATA.json";

// let userData = [
//   {
//     name : "jai",
//     age : 56
//   },
//   {
//     name : "Divyanshu",
//     age : 45
//   },
//   {
//     name : "Mayank",
//     age : 26
//   }
// ]


function App() {
console.log(bigUserData)
  return (
    <>
    <main className="main">
    {
      bigUserData.map((user)=>
        <Card key={user.id} name={user.first_name} age={user.age}></Card>
      )
    }
    </main>
    </>
  );
}

export default App;
