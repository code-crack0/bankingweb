import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Grid } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useState,useEffect } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { CircularProgress } from '@mui/material';
const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'date', headerName: 'Date', width: 150 },
  { field: 'description', headerName: 'Description', width: 300 },
  { field: 'amount', headerName: 'Amount', width: 150 },
];

const rows = [
  { id: 1, date: '2023-04-01', description: 'Groceries', amount: '$50.00',cardtype:'Credit' },
  { id: 2, date: '2023-04-02', description: 'Gasoline', amount: '$30.00',cardtype:'Debit' },
  { id: 3, date: '2023-04-03', description: 'Dinner', amount: '$40.00',cardtype:'Credit' },
  { id: 4, date: '2023-04-01', description: 'Groceries', amount: '$50.00',cardtype:'Debit' },
  { id: 5, date: '2023-04-02', description: 'Gasoline', amount: '$30.00' ,cardtype:'Credit'},
  { id: 6, date: '2023-04-03', description: 'Dinner', amount: '$40.00',cardtype:'Debit' },
  { id: 7, date: '2023-04-01', description: 'Groceries', amount: '$50.00', cardtype:'Credit' },
  { id: 8, date: '2023-04-02', description: 'Gasoline', amount: '$30.00',cardtype:'Debit' },
  { id: 9, date: '2023-04-03', description: 'Dinner', amount: '$40.00',cardtype:'Credit' },
  { id: 10, date: '2023-04-01', description: 'Groceries', amount: '$50.00',cardtype:'Debit' },
  { id: 11, date: '2023-04-02', description: 'Gasoline', amount: '$30.00',cardtype:'Credit' },
  { id: 12, date: '2023-04-03', description: 'Dinner', amount: '$40.00',cardtype:'Debit' },
];

const BankStatement = () => {
  const heading1 = 'Statement of Account';
  const dropdownOptions = ['Credit', 'Debit'];
  const [selectedOption, setSelectedOption] = useState('');
  const [cardtype,setCardtype] = useState('Credit');
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setCardtype(event.target.value);
  };
  useEffect(() => {
    // Simulating content loaded
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Clean up function to clear the timeout if component unmounts
    return () => clearTimeout(loadingTimeout);
  }, []);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className='flex flex-row'>
      <Sidebar />
      <main className='bg-gray-100 min-h-screen flex-grow flex flex-col'>
        {isLoading ? (
          <div className='flex justify-center items-center h-screen'>
            <CircularProgress />
          </div>
        ) : (  
            <>
        < Grid container justifyContent="space-between" alignItems="center">
          <Header text={heading1} />
          <FormControl  sx={{width:'200px',padding:'10px',marginTop:'5px'}}>
            <InputLabel  id="dropdown-label">Options</InputLabel>
            <Select
              labelId="dropdown-label"
              id="dropdown"
              value={cardtype}
              label="Options"
              sx={{width:'200px',alignItems:'center'}}
              onChange={handleOptionChange}
            >
            {dropdownOptions.map((option) => (
            <MenuItem value={option}>{option}</MenuItem>
            ))}
            </Select>
          </FormControl>
        </Grid>
        <DataGrid rows={rows.filter(row => row.cardtype == cardtype)} columns={columns} checkboxSelection/>
          </>
        )}
      </main>
    </div>
  );
};
export default BankStatement;
