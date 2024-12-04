export const getDentists = async() => {
    const url = `https://jsonplaceholder.typicode.com/users`;
    console.log("URL", url);
    const resp = await fetch(url).then((response) => response.json()).then((json) => (json));
    
    return resp;

}

export const getDentistInfo = async(id) => {
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;
    console.log("URL", url);
    const resp =  await fetch(url).then((response) => response.json()).then((json) => (json));
    console.log("RESP", resp)
    return resp;
}