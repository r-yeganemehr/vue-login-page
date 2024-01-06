
export async function sendCode(phone) {
    if(phone.length == 10){
        phone = "98." + phone;
    }

    if(phone.length == 11){
        phone = "98." + phone.substring(1);
    }
 
    const result = await fetch("http://yeganemehr.ir/reyhajoon/send-code.php", {
        method: "POST",
        headers: {
            "Content-Type": 'application/x-www-form-urlencoded'
        },
        body: (new URLSearchParams({phone})).toString(),
    });
    
    const data = await result.json();
    if (data.status !== true)  {
        throw new Error(data.error);
    }
    return data;
}

export async function validataCode(phone , code){
    const result = await fetch("http://yeganemehr.ir/reyhajoon/validate-code.php", {
        method: "POST",
        headers: {
            "Content-Type": 'application/x-www-form-urlencoded'
        },
        body: (new URLSearchParams({phone , code})).toString(),
    })
    const data = await result.json();
    if (data.status !== true)  {
        throw new Error(data.error);
    }
    return data;
}
