export async function getdebits() {
    // await axios.get(`http://localhost:3001/api/v1/debit-transactions`)
    return Promise.resolve([
      {
        id: 2,
        date: "2023-04-02",
        title: "Gasoline",
        amount: "$30.00",
      },
      {
        id: 4,
        date: "2023-04-01",
        title: "Groceries",
        amount: "$50.00",
      },
      {
        id: 6,
        date: "2023-04-03",
        title: "Dinner",
        amount: "$40.00",
      },
      {
        id: 8,
        date: "2023-04-02",
        title: "Gasoline",
        amount: "$30.00",
      },
      {
        id: 10,
        date: "2023-04-01",
        title: "Groceries",
        amount: "$50.00",
      },
      {
        id: 12,
        date: "2023-04-03",
        title: "Dinner",
        amount: "$40.00",
      },
    ]);
}

