import React, { useState } from "react";
import { states } from "../constants/Constants";
import { addIncident } from '../api/API';

function Report() {
  const [values, setValues] = useState({
    description: "",
    date: "",
    category: "",
    subcategory: "",
    state: "",
    source: "",
    name: "",
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    console.log(values);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 

    //hit the api
    addIncident(values)
    console.log("Form submitted: ", values);
  };

  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Sample Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-600"
          >
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            rows="4"
            className="mt-1 p-2 w-full border rounded-md"
            required
            onChange={handleChange}
          ></textarea>
        </div>

        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-600"
          >
            Date:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="mt-1 p-2 w-full border rounded-md"
            required
            onChange={handleChange}
          />
        </div>

        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-600"
          >
            Category:
          </label>
          <select
            id="category"
            name="category"
            className="mt-1 p-2 w-full border rounded-md"
            required
            onChange={handleChange}
          >
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            <option value="category3">Category 3</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="subcategory"
            className="block text-sm font-medium text-gray-600"
          >
            Subcategory:
          </label>
          <select
            id="subcategory"
            name="subcategory"
            className="mt-1 p-2 w-full border rounded-md"
            required
            onChange={handleChange}
          >
            <option value="subcat1">Subcategory 1</option>
            <option value="subcat2">Subcategory 2</option>
            <option value="subcat3">Subcategory 3</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="state"
            className="block text-sm font-medium text-gray-600"
          >
            State:
          </label>
          <select
            id="state"
            name="state"
            className="mt-1 p-2 w-full border rounded-md"
            required
            onChange={handleChange}
          >
            {states.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="source"
            className="block text-sm font-medium text-gray-600"
          >
            Source (optional):
          </label>
          <input
            type="text"
            id="source"
            name="source"
            className="mt-1 p-2 w-full border rounded-md"
            onChange={handleChange}
          />
        </div>

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Name (optional):
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 w-full border rounded-md"
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            type="submit"
            value="Submit"
            className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          />
        </div>
      </form>
    </div>
  );
}

export default Report;
