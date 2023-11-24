import frontmatter from "ptm-frontmatter";
import showdown from "showdown";
import showdownHighlight from 'showdown-highlight';
import fs from 'fs';
import htmlTemplate from "../template/postTemp.js";

// output
// data - string
class Converter {
    constructor(filePath){
        this.filePath = filePath;
    }
    formatDate(date){
        return new Date(date).toLocaleString('en-US',{
            weekday: "short",
            day: "numeric",
            month: "short",
            year:"numeric"
        })
    };
    readTime(text) {
        const wpm = 225;
        const words = text.trim().split(/\s+/).length;
        return Math.ceil(words / wpm);
        
    };
    lastUpdate () {
        const stats = fs.statSync(this.filePath);
        const lastModifiedTime = stats.mtime.toISOString();
        return lastModifiedTime;
    };
    
    convert(){
        const a = new showdown.Converter({
            parseImgDimensions: true,
            simplifiedAutoLink: true,
            strikethrough: true,
            tables: true,
            tasklists: true,
            openLinksInNewWindow: true,
            emoji:true,
            moreStyling: true,
            extensions:[
                showdownHighlight({ pre: true })
            ]
            
        });
        a.setFlavor('github');
        return a
    }

    filecontent(){
        return frontmatter(this.filePath);
    }

    get data (){
        return this.filecontent().data;
    }
    get content(){
        return this.filecontent().content;
    }
    get postTitle(){
        return this.data.title;
    }
    get postDate (){
        return this.formatDate(this.data.date)
    }
    get lastUpdatedDate(){
        const a = this.formatDate(this.lastUpdate());
        return `<small>Last Update : ${a}</small>`
    }
    get readingTime(){
        const a = this.readTime(this.content);
        return `<small>Reading Time : ${a} minutes</small>`
    }
    get json (){
        return JSON.stringify(this.filecontent())
    }
    get convertedContent(){
        return this.convert().makeHtml(this.content);
    }
    get postHtml (){
        return htmlTemplate({
            postContent: this.convertedContent,
            postTitle: this.postTitle,
            postDate: this.postDate,
            readingTime: this.readingTime,
            lastUpdate: this.lastUpdatedDate
        })
    }

    get pageHtml (){
        return htmlTemplate({
            postContent: this.convertedContent
        })
    }

    get html () {
        const fc = fs.readFileSync(this.filePath);
        const fcc = this.convert().makeHtml(fc);
        return htmlTemplate({
            postContent: fcc
        })
    }
   
}

export default Converter;

// const a = new Converter('./index.md').pageHtml

// console.log(a)