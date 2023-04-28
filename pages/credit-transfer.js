import Sidebar from "@/components/Sidebar";
import {
  CircularProgress,
} from "@mui/material";
import { useState, useEffect } from "react";
import Monthlycredits from "@/components/Monthlycredits";
import { Checkbox } from "@mui/material";
const credit = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulating content loaded
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    // Clean up function to clear the timeout if component unmounts
    return () => clearTimeout(loadingTimeout);
  }, []);
  return (
    <div className="flex flex-row">
      <Sidebar />
      <main className="bg-gray-100 min-h-screen flex-grow flex flex-col">
        {isLoading ? (
          <div className="flex justify-center items-center h-screen">
            <CircularProgress />
          </div>
        ) : (
          <>
            <p className="bg-white p-5 text-bold text-black font-mono">
              Bill Payment
            </p>
            <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
              <div className="mb-6 w-1/4">
                <label
                  class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Credit title
                </label>
                <input
                  class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                  id="grid-amount"
                  type="text"
                  placeholder="Enter the debit title"
                />
              </div>
              <div class="-mx-3 md:flex mb-6 w-1/2 flex flex-row justify-center">
                <div class="md:w-full px-3">
                  <input type="text" />
                </div>
              </div>
              <div class="mb-6 w-1/4">
                <label
                  class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  for="grid-amount"
                >
                  Transfer Amount
                </label>
                <input
                  class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                  id="grid-amount"
                  type="text"
                  placeholder="Enter the amount"
                  />
                  <span>Auto Pay</span>
                  <Checkbox onChange={handleChange} />
              </div>
              <button
                class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Submit
              </button>
              <div className="mt-3">
                <Monthlycredits />
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};
export default credit;
