import fetch from "isomorphic-unfetch"
type Config = {
    apikey: string,
    baseUrl?: string
}

export abstract class Base  {
    private apikey: string
    private baseUrl: string
    constructor(config: Config){
        this.apikey = config.apikey,
        this.baseUrl = config.baseUrl || "https://jsonplaceholer.typicode.com"
    }
protected invoke<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;

    const headers = {
        "Content-Type": "Application/json",
        "apikey" :this.apikey
    }

    const config = {
        ...options,
        headers
    }

    return fetch(url, config).then((response) => {
        if(response.ok){
            return response.json()
        }else {
            throw new Error(response.statusText);
        }
    })
}


}