export async function getChartDetails() {
    const current_month = new Date().getMonth();
    let result = [];
    for (let i = 1; i <= current_month; i++) {
      // let response = await axios.get(`http://localhost:3001/api/v1/${current_month}`)
      // result.push(response.data.amount)
    }
    return Promise.resolve(
        [
            {
            name: "Jan",
            amount: 33100,
            },
        {
            name: "Feb",
            amount: 43100.00,
            },
        {
            name: "Mar",
            amount: 53100.00,
            },
        {
            name: "Apr",
            amount: 12100.00,
            },
        {
            name: "May",
            amount: 6100.00,
            },

        ]
    );


}
