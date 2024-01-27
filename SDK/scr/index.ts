import { Base } from "./base";
import { Posts } from "./post";
import { applyMixins } from "./utills";

class typicode extends Base{}
interface typicode extends Posts{}

applyMixins(typicode, [Posts]);

export default typicode