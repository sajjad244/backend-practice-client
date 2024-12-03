import {Link, useLoaderData} from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import {useState} from "react";

function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <>
      <h1 className="my-10 text-2xl text-purple-600">
        <Link to="/login">Login</Link>
      </h1>
      <h1 className="my-10 text-2xl text-purple-600">
        <Link to="/signin">Signin</Link>
      </h1>
      <h1 className="my-10 text-2xl text-purple-600">
        <Link to="/users">users</Link>
      </h1>
      <h1 className="text-6xl text-purple-600">Coffee {coffees.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </>
  );
}

export default App;
