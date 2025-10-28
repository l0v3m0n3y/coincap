class coincap {
    constructor(){
        this.api = "http://api.coincap.io/v2"
        this.headers={"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0","content-type":"application/json; charset=UTF-8"}
    }
    async assets_list(){
        let req=await fetch(`${this.api}/assets`,{method:"GET",headers: this.headers});
        return await req.json();
    }
    async get_assets(id){
        let req=await fetch(`${this.api}/assets/${id}`,{method:"GET",headers: this.headers});
        return await req.json();
    }
    async markets_list(){
        let req=await fetch(`${this.api}/markets`,{method:"GET",headers: this.headers});
        return await req.json();
    }
    async get_markets(id){
        let req=await fetch(`${this.api}/markets/${id}`,{method:"GET",headers: this.headers});
        return await req.json();
    }
    async exchanges_list(){
        let req=await fetch(`${this.api}/exchanges`,{method:"GET",headers: this.headers});
        return await req.json();
    }
    async get_exchanges(id){
        let req=await fetch(`${this.api}/exchanges/${id}`,{method:"GET",headers: this.headers});
        return await req.json();
    }
}
module.exports = {coincap};