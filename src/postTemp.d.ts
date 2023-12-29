type props = {
    postContent: string;
    postTitle: string;
    postDate: string;
    readingTime: string;
    lastUpdate: string;
};
declare const htmlTemplate: ({ postContent, postTitle, postDate, readingTime, lastUpdate }: props) => string;
export default htmlTemplate;
//# sourceMappingURL=postTemp.d.ts.map