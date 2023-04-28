export async function getcredits() {
    // await axios.get(`http://localhost:3001/api/v1/credit-transactions`)
    return Promise.resolve([
        {
            id: 1,
            date: "2023-04-02",
            title: "Allowance",
            amount: "$100.00",
        },
        {
            id: 3,
            date: "2023-04-01",
            title: "Allowance",
            amount: "$100.00",
        },
        {
            id: 5,
            date: "2023-04-03",
            title: "Allowance",
            amount: "$100.00",
        },
        {
            id: 7,
            date: "2023-04-02",
            title: "Allowance",
            amount: "$100.00",
        },
        {
            id: 9,
            date: "2023-04-01",
            title: "Allowance",
            amount: "$100.00",
        },
        {
            id: 11,
            date: "2023-04-03",
            title: "Allowance",
            amount: "$100.00",
        },
    ]);
}

