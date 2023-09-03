export class Member {
    category:string;
    position:String;
    name:String;
    summary:String;
    link:String;
    imageSource:String;
    ref:string;
    constructor(position:string, category:string, name:string, summary:string, link:string, imageSource:string, ref:string){
        this.position = position;
        this.category = category;
        this.name = name;
        this.summary = summary;
        this.link = link;
        this.imageSource = imageSource;
        this.ref = ref;
    }
    
}
