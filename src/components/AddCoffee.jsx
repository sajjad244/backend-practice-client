import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const coffeeName = e.target.coffeeName.value;
    const availableQuality = e.target.availableQuality.value;
    const supplier = e.target.supplier.value;
    const quantity = e.target.quantity.value;
    const taste = e.target.taste.value;
    const photoUrl = e.target.photo.value;

    const newCoffee = {
      coffeeName,
      availableQuality,
      supplier,
      quantity,
      taste,
      photoUrl,
    };
    console.log(newCoffee);

    //! send data to server {for creating new data}

    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          //   e.target.reset();
        }
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="card w-full max-w-lg bg-white shadow-lg p-6 rounded-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Add a Coffee</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Coffee Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Coffee Name</span>
              </label>
              <input
                type="text"
                name="coffeeName"
                placeholder="Enter coffee name"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Available Quality */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Available Quality</span>
              </label>
              <input
                type="text"
                name="availableQuality"
                placeholder="Enter available quality"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Supplier */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Supplier Name</span>
              </label>
              <input
                type="text"
                name="supplier"
                placeholder="Enter supplier name"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Quantity */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Quantity</span>
              </label>
              <input
                type="number"
                name="quantity"
                placeholder="Enter quantity"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Taste */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <input
                type="text"
                name="taste"
                placeholder="Enter coffee taste"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Details */}
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <textarea
                name="details"
                placeholder="Enter coffee details"
                className="input input-bordered w-full"
                required
              ></textarea>
            </div>

            {/* Photo URL */}
            <div className="form-control col-span-2">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="url"
                name="photo"
                placeholder="Enter photo URL"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary w-full">
              Add Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
