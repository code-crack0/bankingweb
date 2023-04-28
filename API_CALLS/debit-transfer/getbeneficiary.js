export async function getbeneficiary() {
    // let response = await axios.get(`http://localhost:3001/api/v1/beneficiary`)
    // return response.data
    return Promise.resolve({
        beneficiaries: [
            {
                id: 1,
                name: "John Doe",
                iban: 2323232323232323,
            },
            {
                id: 2,
                name: "Jane Doe",
                iban: 2323232323232323,
            },
        ]
    });
    
}