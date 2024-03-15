import PropTypes from 'prop-types';
const Course = ({ course, handleCart }) => {
  const { name, description, photo, price, credit } = course;
  return (
    <div>
      <div className="border text-card-foreground w-full rounded-lg bg-white p-4 shadow-md">
        <div className="flex flex-col space-y-1.5 px-1">
          <div className="relative mb-4 h-[150px] w-full overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 p-2">
            <img
              src={photo}
              alt=""
              className="absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 transform"
              width="287"
              height="96"
            />
          </div>
        </div>
        <div className="px-1">
          <h3 className="mb-2 text-lg font-semibold">{name}</h3>
          <p className="mb-4 text-sm text-gray-600">{description}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5 text-gray-800"
              >
                <line x1="12" x2="12" y1="2" y2="22"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
              <span className="font-medium">Price: {price}</span>
            </div>
            <div className="flex items-center space-x-1">
              <img
                src="https://cdn.hugeicons.com/icons/book-open-01-stroke-rounded.svg"
                alt="book-open-01"
                width="24"
                height="24"
              />
              <span className="font-medium">Credit: {credit}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center mt-4">
          <button
            onClick={() => handleCart(course)}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#2F80ED] text-white hover:bg-[#2773d6] h-10 px-4 py-2 w-full"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

Course.propTypes = {
    course: PropTypes.array.isRequired,
    handleCart: PropTypes.func.isRequired,
}

export default Course;
