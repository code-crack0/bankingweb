export async function getRecentDebitTransactions() {
    // await axios.get(`http://localhost:3001/api/v1/debit-transactions`)
    return Promise.resolve(
         [
            {
                id: 1,
                date: "2021-05-01",
                title: "Amazon",
                amount: "$100.00",
            },
            {
                id: 2,
                date: "2021-05-02",
                title: "Amazon",
                amount: "$100.00",
            },
            {
                id: 3,
                date: "2021-05-03",
                title: "Amazon",
                amount: "$100.00",
            },
            {
                id: 4,
                date: "2021-05-04",
                title: "Amazon",
                amount: "$100.00",
            },
            {
                id: 5,
                date: "2021-05-05",
                title: "Amazon",
                title: "$100.00",
            },
        ]
    );
}
