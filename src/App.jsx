import { useState } from "react";
import Cart from "./components/Cart";
import Courses from "./components/Courses";

export const totalCreditHour = 15;
function App() {
  const [cart, setCArt] = useState([]);
  const handleCart = (course) => {
    const creditHour = cart.reduce((acc, value) => acc + value.credit, 0);
    const isExist = cart.find((item) => item.id === course.id);
    if (!isExist && creditHour + course.credit <= totalCreditHour) {
      setCArt([...cart, course]);
    } else {
      alert("Cannot add more credit than 15");
    }
  };
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="my-5 text-3xl text-center font-bold">
        Course Registration
      </h1>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="basis-3/4">
          <Courses handleCart={handleCart}></Courses>
        </div>
        <div className="basis-1/4">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
