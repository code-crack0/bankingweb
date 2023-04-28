export async function getCreditCard() {
    // await axios.get(`http://localhost:3001/api/v1/credit_card`)
    return Promise.resolve({
        creditcardnumber: "1234 5678 9012 3456",
        expirydate: "01/01/2025",
    });
}
