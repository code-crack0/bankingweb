export async function getCheckingAccountBalance() {
    // await axios.get(`http://localhost:3001/api/v1/checking-account/balance`)
    return Promise.resolve({
        balance: "AED 1000",
    });
}
