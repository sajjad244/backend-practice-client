import {Link} from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({coffee, coffees, setCoffees}) => {
  const {
    coffeeName,
    _id,
    availableQuality,
    supplier,
    quantity,
    taste,
    photoUrl,
  } = coffee;

  // ! delete from server or database

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remainingCoffee = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remainingCoffee);
            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photoUrl} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{coffeeName}</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className="card-actions justify-end ">
          <div className="join join-vertical space-y-5">
            <button className="btn join-item">View</button>
            <Link to={`/updateCoffee/${_id}`}>
              <button className="btn join-item">Edit</button>
            </Link>

            <button
              onClick={() => handleDelete(_id)}
              className="btn join-item bg-orange-600"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
