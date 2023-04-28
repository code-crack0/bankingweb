export async function putFamilyMemberAllowance(id, allowance) {
    await axios.put(`http://localhost:3001/api/v1/family/allowance/${id}`, { allowance: allowance })
}