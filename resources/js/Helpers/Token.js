class Token{

isValid(token){
    const payload = this.payload(token);
    // console.log(payload.iss)
    if(payload){
        return payload.iss == "http://127.0.0.1:8000/api/auth/login" ||
        "http://127.0.0.1:8000/api/auth/signup" ? true : false
    }

    return false
}

    payload(token){
        const payload = token.split('.')[1]
       // console.log(token)
       //   console.log(payload)
        return this.decode(payload)
       // console.log(JSON.parse(atob(payload)))
    }

    decode(payload){
        return JSON.parse(atob(payload))
    }

}

export default Token = new Token()
