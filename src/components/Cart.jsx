import PropTypes from 'prop-types';
import { totalCreditHour } from "../App";

const Cart = ({ cart }) => {
  const creditHour = cart.reduce((acc, value) => acc + value.credit, 0);
  return (
    <div className="my-5">
      <div className="bg-white rounded-lg p-6 shadow-md max-w-sm">
        <div className="border-b pb-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Credit Hour Remaining {totalCreditHour - creditHour} hr
          </h2>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-800">Course Name</h3>
          <ul className="list-decimal list-inside">
            {cart.map((cart, idx) => (
              <li key={idx}>{cart.name}</li>
            ))}
            {/* <li>Introduction to C++ for DSA</li>
            <li>Software Engineering</li> */}
          </ul>
        </div>
        <div className="mt-4 border-t pt-4">
          <p className="text-lg font-semibold text-gray-800">
            Total Credit Hour: {creditHour}
          </p>
        </div>
        <div className="mt-4 border-t pt-4">
          <p className="text-lg font-semibold text-gray-800">
            Total Price: {cart.reduce((acc, value) => acc + value.price, 0)} USD
          </p>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
}

export default Cart;
