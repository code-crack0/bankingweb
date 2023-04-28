import axios from 'axios';
export async function getFamilyMembers() {
    //const response = await axios.get('http://localhost:3001/api/v1/family')
    //return response.data  
    return Promise.resolve([
  {
    name: "John Smith",
    relation: "Son",
    allowance: "AED 1000",
    dateOfBirth: "01/01/2000",
  },
  {
    name: "Jane Smith",
    relation: "Daughter",
    allowance: "AED 1000",
    dateOfBirth: "01/01/1973",
  },
  {
    name: "Jack Smith",
    relation: "Son",
    allowance: "AED 1000",
    dateOfBirth: "01/01/1973",
  },]
)
}