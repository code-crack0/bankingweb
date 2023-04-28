export async function getuserdetails() {
    // await axios.get(`http://localhost:3001/api/v1/auth/user`)
    return Promise.resolve({
        name: "John Smith",
        email: "john@gmail.com",
        phonenumber: "+971501234567",
        dob: "01/01/2000",
    });
}

