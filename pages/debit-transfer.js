import Sidebar from "@/components/Sidebar";
import {
  CircularProgress,
  FormControl,
  Typography,
  Box,
  Button,
} from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import { NativeSelect, InputLabel } from "@mui/material";
import Modal from "@mui/material/Modal";
import { Checkbox } from "@mui/material";
import { senddebittransfer } from "@/API_CALLS/debit-transfer/senddebittransfer";
import postbeneficiary from "@/API_CALLS/debit-transfer/postbeneficiary";
import { getbeneficiary } from "@/API_CALLS/debit-transfer/getbeneficiary";
const debit = () => {
  useEffect(() => {
    getbeneficiary().then((data) => {
      setBeneficiary(data);
    });
  }, []);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [beneficiary, setBeneficiary] = useState([]);
  const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [checked, setChecked] = useState(false);
  const [date, setDate] = useState(null);
  const [beneficiaryId, setBeneficiaryId] = useState(null);
  const [amount, setAmount] = useState(null);
  const [isinstallment, setIsinstallment] = useState(false);
  const [duedate, setDuedate] = useState(null);
  const [title, setTitle] = useState(null);
  const [newbeneficiary, setNewbeneficiary] = useState(false);
  const [newiban, setNewiban] = useState(null);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  // if checkbox is true need modal1 to be true write code here
  const [modal1, setModal1] = useState(false);
  const handleOpen = () => setModal(true);
  const handleClose = () => setModal(false);
  const Closer = () => {
    if (date == null) {
      alert("Please select a date");
      setChecked(true);
    } else {
      setChecked(false);
    }
  };
  useEffect(() => {
    // Simulating content loaded
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    // Clean up function to clear the timeout if component unmounts
    return () => clearTimeout(loadingTimeout);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    senddebittransfer({
      beneficiaryId,
      amount,
      isinstallment,
      duedate,
      title,
    });
    router.refresh();

  };
  const handleNewMember = (e) => {
    e.preventDefault();
    postbeneficiary({ newbeneficiary, newiban });
    router.refresh();
  };
  



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
              Payee Information
            </p>
            <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
              <div class="-mx-3 md:flex mb-6">
                <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                    for="grid-first-name"
                  >
                    First Name
                  </label>
                  <input
                    class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                    id="grid-first-name"
                    type="text"
                    placeholder="Jane"
                  />
                  <p class="text-red text-xs italic">
                    Please fill out this field.
                  </p>
                </div>
                <div class="md:w-1/2 px-3">
                  <label
                    class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                    for="grid-last-name"
                  >
                    Last Name
                  </label>
                  <input
                    class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                    id="grid-last-name"
                    type="text"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="mb-6 w-1/4">
                <label
                  class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Debit title
                </label>
                <input
                  class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                  id="grid-amount"
                  type="text"
                    placeholder="Enter the debit title"
                    onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div class="-mx-3 md:flex mb-6 w-1/2 flex flex-row justify-center">
                <div class="md:w-full px-3">
                  <FormControl sx={{ width: 500 }}>
                    <InputLabel
                      variant="standard"
                      htmlFor="uncontrolled-native"
                    >
                      IBAN
                    </InputLabel>
                    <NativeSelect
                      defaultValue={30}
                      inputProps={{
                        name: "age",
                        id: "uncontrolled-native",
                        }}
                        onChange={(e) => setBeneficiaryId(e.target.value)}
                    >
                      {beneficiary.map((beneficiary) => (
                        <option value={beneficiary.iban}>
                          {beneficiary.id +
                            ". " +
                            beneficiary.name +
                            " - " +
                            beneficiary.iban}
                        </option>
                      ))}
                    </NativeSelect>
                  </FormControl>
                  <Button onClick={handleOpen} className="ml-2 p-2 ">
                    Add Beneficiary
                  </Button>
                  <div>
                    <Modal
                      open={modal}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Typography variant="h6" component="h2">
                          Enter Account Name
                        </Typography>
                        <input
                          type="text"
                          placeholder="Enter Account Name"
                            className="p-2"
                            onChange={(e) => setNewbeneficiary(e.target.value)}
                        />
                        <Typography variant="h6" component="h2">
                          Enter IBAN
                        </Typography>
                        <input
                          type="text"
                          placeholder="Enter IBAN"
                            className="p-2"
                            onChange={(e) => setNewiban(e.target.value)}
                        />
                        <Button
                          variant="h6"
                          component="h2"
                            className="p-2 mt-2"
                            onClick={handlenewMember}
                        >
                          Submit
                        </Button>
                      </Box>
                    </Modal>
                  </div>
                </div>
              </div>

              <div class="-mx-3 md:flex mb-6">
                <div class="md:w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                    for="grid-address"
                  >
                    Address
                  </label>
                  <textarea
                    class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                    id="grid-address"
                    type="text"
                    placeholder="Enter your address"
                  ></textarea>
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
                    onChange={(e) => setAmount(e.target.value)}
                />
              </div>

              <div class="mb-6 w-1/4">
                <label
                  class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                  for="grid-amount"
                >
                  Would you like to pay in installements?
                  <Checkbox onChange={handleChange} />
                </label>
              </div>
              <div>
                {checked ? (
                  <Modal
                    disableBackdropClick
                    open={checked}
                    onClose={Closer}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography variant="h6" component="h2">
                        Enter Date of last payment
                      </Typography>
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        placeholder="Enter Date of last payment"
                        className="p-2"
                      />
                    </Box>
                  </Modal>
                ) : null}
              </div>
              <button onClick={handleSubmit}
                class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  type="submit"
                  onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
  };
  
export default debit;
