import { useState } from "react";
import { useNavigate } from "react-router-dom";


const UserDetails = () => {
    const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    fatherName: "",
    motherName: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Details:", form);

    alert("Form Submitted Successfully!");
    navigate("/CompanyDetails");
  };

  return (
    <div className="max-w-2xl mx-auto border-2 border-gray-400 bg-white p-8 mt-10 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-700 text-center">
        User Details Form
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5 ">

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          className="border-2 border-gray-400  p-3 rounded-md"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border-2 border-gray-400 p-3 rounded-md"
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="border-2 border-gray-400 p-3 rounded-md"
          onChange={handleChange}
          required
        />

        <select
          name="gender"
          className="border-2 border-gray-400 p-3 rounded-md"
          onChange={handleChange}
          required
        >
          <option value="">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <input
          type="date"
          name="dob"
          className="border-2 border-gray-400 p-3 rounded-md"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="fatherName"
          placeholder="Father's Name"
          className="border-2 border-gray-400 p-3 rounded-md"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="motherName"
          placeholder="Mother's Name"
          className="border-2 border-gray-400 p-3 rounded-md"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          className="border-2 border-gray-400 p-3 rounded-md"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="state"
          placeholder="State"
          className="border-2 border-gray-400 p-3 rounded-md"
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="pincode"
          placeholder="Pincode"
          className="border-2 border-gray-400 p-3 rounded-md"
          onChange={handleChange}
          required
        />

        <textarea
          name="address"
          placeholder="Full Address"
          className="border-2 border-gray-400 p-3 rounded-md h-28 md:col-span-2 resize-none"
          onChange={handleChange}
          required
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded md:col-span-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserDetails;
