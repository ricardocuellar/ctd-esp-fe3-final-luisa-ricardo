export const getDentists = async() => {
    const url = `https://jsonplaceholder.typicode.com/users`;
    console.log("URL", url);
    const resp = await fetch(url).then((response) => response.json()).then((json) => (json));
    
    return resp;

}