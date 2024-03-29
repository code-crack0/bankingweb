import Sidebar from "@/components/Sidebar";
import Head from "next/head";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import React from "react";
import { getFamilyMembers } from "@/API_CALLS/Family/getfamilymembers";
import { putFamilyMemberAllowance } from "@/API_CALLS/Family/putfamilymemberallowance";
import { useRouter } from "next/navigation";
 import { FormControl,NativeSelect, InputLabel } from "@mui/material";

export default function Family() {
  const [family, setFamily] = useState([]);
  const router = useRouter();
  const [openChangeAllowance, setOpenChangeAllowance] = useState(false);
  const [openAddMember, setOpenAddMember] = useState(false);
  const [memberIndex, setMemberIndex] = useState(-1);
  const [allowance, setAllowance] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [relation, setRelation] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [mainuser, setMainuser] = useState(false);
  const [phonenumber, setPhonenumber] = useState("");
  useEffect( () => {
    getFamilyMembers().then((data) => {
      setFamily(data);
    });
  }, []);

  const handleChangeAllowance = (index) => {
    setOpenChangeAllowance(true);
    setMemberIndex(index);
  };
  const handleAddMember = () => {
    setOpenAddMember(true);
  };
  
  const handleCloseModal = () => {
    setOpenChangeAllowance(false);
    setAllowance("");
    setFirstName("");
    setLastName("");
    setRelation("");
    setDateOfBirth("");
    setOpenAddMember(false);
    setMemberIndex(-1);
  };

  const handleAllowanceChange = (event) => {
    setAllowance(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleRelationChange = (event) => {
    setRelation(event.target.value);
  };

  const handleDateOfBirthChange = (date) => {
    setDateOfBirth(date);
  };
  const handlePhonenumberChange = (event) => {
    setPhonenumber(event.target.value);
  };

  const handleAllowanceSubmit = async () => {
    // await putFamilyMemberAllowance(family[memberIndex].id, allowance);
    router.refresh();
  };
  const handleMainUserChange = (event) => {
    setMainuser(event.target.value);
  };

  const handleAddMemberSubmit = async () => {
    await addfamilymember(firstName, lastName, relation, dateOfBirth, mainuser, allowance, phonenumber);
    setFirstName("");
    setLastName("");
    setRelation("");
    setDateOfBirth("");
    setAllowance("");
    setOpenAddMember(false);
    setPhonenumber("");
    setMainuser(false);
    router.refresh();
    };

  return (
    <>
      <Head>
        <title>FamilyPage</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="bg-gray-100 flex flex-row">
        <Sidebar />
        <main className="bg-gray-100 min-h-screen flex-grow flex flex-col">
          <header className="bg-blue-600 py-4">
            <h1 className="text-white text-3xl text-center">Family Members</h1>
          </header>
          <div className="container mx-auto py-8">
            {family.map((member, index) => (
              <div
                className="flex items-center bg-white rounded-md shadow-md mb-4 px-4 py-2"
                key={index}
              >
                <img
                  src="https://static.vecteezy.com/system/resources/previews/001/840/618/original/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg"
                  alt="Profile Picture"
                  className="w-24 h-24 rounded-full mr-6"
                />
                <div>
                  <h2 className="text-2xl font-bold">{member.name}</h2>
                  <p className="text-gray-500 mt-2">{member.relation}</p>
                  <div className="text-gray-500 mb-2 ">
                    {member.dateOfBirth}
                  </div>
                  <div className="mt-2 flex flex-row">
                    <p className="bg-blue-600 text-white text-center py-2 px-5 rounded-md">
                      Max allowance: {member.allowance}
                    </p>
                    <Tooltip title="Change Allowance" arrow>
                      <Button
                        onClick={() => {
                          handleChangeAllowance(index);
                        }}
                      >
                        Change Allowance
                      </Button>
                    </Tooltip>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex justify-center">
              <div className="flex items-center bg-white rounded-md shadow-md px-4 py-2">
                <Button onClick={() => setOpenAddMember(true)}>
                  Add Member
                </Button>
              </div>
            </div>
          </div>
          <Modal open={openAddMember} onClose={handleCloseModal}>
            <div className="bg-white rounded-md shadow-md px-4 py-2">
              <h2 className="text-2xl font-bold mb-4">New Family Member</h2>
              <TextField
                label="First Name"
                placeholder="Enter First Name"
                value={firstName}
                onChange={handleFirstNameChange}
              />
              <TextField
                label="Last Name"
                placeholder="Enter Last Name"
                value={lastName}
                onChange={handleLastNameChange}
              />
              <TextField
                label="Relation"
                placeholder="Enter Relation"
                value={relation}
                onChange={handleRelationChange}
              />
              <input type="date" onChange={handleDateOfBirthChange} />
              <TextField
                label="Allowance"
                placeholder="Enter amount"
                value={allowance}
                onChange={handleAllowanceChange}
              />
              <TextField
                label="phonenumber"
                placeholder="Enter phonenumber(with country code)"
                value={phonenumber}
                onChange={handlePhonenumberChange}
              />
              <FormControl sx={{ width: 500 }}>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  IBAN
                </InputLabel>
                <NativeSelect
                  defaultValue={30}
                  inputProps={{
                    name: "age",
                    id: "uncontrolled-native",
                  }}
                  value={mainuser}
                  onChange={handleMainUserChange}
                >
                  <option value={true}>Main User</option>
                  <option value={false}>Sub User</option>
                </NativeSelect>
              </FormControl>
              <div className="flex justify-end mt-4">
                <Button onClick={handleAddMemberSubmit}>Submit</Button>
              </div>
            </div>
          </Modal>
          <Modal open={openChangeAllowance} onClose={handleCloseModal}>
            <div className="bg-white rounded-md shadow-md px-4 py-2">
              <h2 className="text-2xl font-bold mb-4">Change Allowance</h2>
              <TextField
                label="Allowance"
                placeholder="Enter amount"
                value={allowance}
                onChange={handleAllowanceChange}
              />
              <div className="flex justify-end mt-4">
                <Button onClick={handleAllowanceSubmit}>Submit</Button>
              </div>
            </div>
          </Modal>
        </main>
      </div>
    </>
  );
}

