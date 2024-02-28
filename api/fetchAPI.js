const BASE_URL = "http://127.0.0.1:5500/data/";
export async function getDatas(endpoint){
    try{
        const res =  await fetch(BASE_URL + endpoint + ".json",{
            method: "GET",
            headers: {
                "Content-Type" : "appliation/json",
            },
        });
        const datas = await res.json();
        return datas;
    }catch(error){
        console.log(error);
    }
}