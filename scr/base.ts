type Config = {
    apikey: string,
    baseUrl?: string
}

export abstract class Base  {
    private apikey: string,
    private baseUrl: string
    constructor(config: Config){
        this.apikey = config.apikey,
        this.baseUrl = config.baseUrl || "https://jsonplaceholer.typicode.com"
    }
protected invoke<T>(endpoint: string, options: RequestInt): Promise<T>{
    const url = `${this.baseUrl}${endpoint}`
}
}