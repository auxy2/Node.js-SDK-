import { Base } from "../base"
import { Post, createPosts } from "./types";

const resource = 'posts'
export class Posts extends Base{
getPostById(id: number): Promise<Post>{
    return this.invoke(`/${resource}/${id}`);
} 
getPosts():Promise<Post[]>{
    return this.invoke(`${resource}`)
}

createPosts(newPost: createPosts): Promise<Post>{
    return this.invoke(`/${resource}`, {
        method: "POST",
        body: JSON.stringify(newPost)
    })
}
}