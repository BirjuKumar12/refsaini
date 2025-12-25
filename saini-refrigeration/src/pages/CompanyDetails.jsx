import { useState } from "react";

const CompanyDetails = () => {
  const [form, setForm] = useState({
    companyName: "",
    companyEmail: "",
    companyPhone: "",
    companyType: "",
    gstNumber: "",
    panNumber: "",
    companyWebsite: "",
    companyAddress: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Company Details:", form);
    alert("Company Details Submitted Successfully!");
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 mt-10 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-700 text-center">
        Company Details Form
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          className="border-2 border-gray-400 p-3 rounded-md"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="companyEmail"
          placeholder="Company Email"
          className="border-2 border-gray-400 p-3 rounded-md"
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="companyPhone"
          placeholder="Company Phone Number"
          className="border-2 border-gray-400 p-3 rounded-md"
          onChange={handleChange}
          required
        />

        <select
          name="companyType"
          className="border-2 border-gray-400 p-3 rounded-md"
          onChange={handleChange}
          required
        >
          <option value="">Select Company Type</option>
          <option value="Private Limited">Private Limited</option>
          <option value="Public Limited">Public Limited</option>
          <option value="Partnership">Partnership</option>
          <option value="Proprietorship">Proprietorship</option>
          <option value="LLP">LLP</option>
        </select>

        <input
          type="text"
          name="gstNumber"
          placeholder="GST Number"
          className="border-2 border-gray-400 p-3 rounded-md"
          onChange={handleChange}
        />

        <input
          type="text"
          name="panNumber"
          placeholder="PAN Number"
          className="border-2 border-gray-400 p-3 rounded-md"
          onChange={handleChange}
        />

        <input
          type="text"
          name="companyWebsite"
          placeholder="Company Website (Optional)"
          className="border-2 border-gray-400 p-3 rounded-md"
          onChange={handleChange}
        />

        <textarea
          name="companyAddress"
          placeholder="Full Company Address"
          className="border-2 border-gray-400 p-3 rounded-md h-24 md:col-span-2 resize-none"
          onChange={handleChange}
          required
        ></textarea>

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

        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white py-3 rounded md:col-span-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CompanyDetails;
