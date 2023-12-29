
type props={
    postContent: string;
    postTitle: string;
    postDate: string;
    readingTime: string;
    lastUpdate: string
}
const htmlTemplate = ({postContent, postTitle, postDate, readingTime, lastUpdate}: props) =>{
    const pc = postContent === undefined ? console.error('Error') :  postContent;
    const tt = postTitle === undefined ? '' : postTitle ;
    const dat = postDate === undefined ? '' : postDate;
    const rt = readingTime === undefined ? '' : readingTime;
    const lud = lastUpdate === undefined ? '' : lastUpdate;
    const html = /* html */ `
        <div>
            <h2>${tt}</h2>
            <small>${dat}</small>
            ${rt}
            <div>${pc}</div>
            ${lud}
        </div>
    `;
    return html
};

export default htmlTemplate;