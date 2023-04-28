export async function sendChatbotMessage(message) {
    //let response =  await axios.post(`http://localhost:3001/api/v1/chatbot`, { message: message })
    // let msg = response.data.response;
    // if (msg.includes("^safe_spend^")) {
    //     let amnt = await axios.get(`http://localhost:3001/api/v1/safe-spend`).data.amount;
    //     msg = msg.replace("^safe_spend^", (amnt / 100).to_string());
    // }
    // if (msg.includes("^salary_date^")) {
    //   let date = await axios.get(`http://localhost:3001/api/v1/salary-date`).data
    //     .amount;
    //   msg = msg.replace("^safe_spend^", date);
    // }
    // return msg;
    return Promise.resolve(
        "Hello, how can I help you?"
    );

}