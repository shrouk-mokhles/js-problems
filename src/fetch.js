async function getCompanyName() {
    const apiUrl = "https://jsonplaceholder.typicode.com/users/1";
    try {
        const response = await fetch(apiUrl)
        const data = await response.json();
        console.log("Company Name:", data.company.name)
    } catch (error) {
         console.error("error".error)
    }
}
getCompanyName()