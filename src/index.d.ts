import showdown from "showdown";
declare class Converter {
    filePath: string;
    constructor(filePath: string);
    formatDate(date: string): string;
    readTime(text: string): number;
    lastUpdate(): string;
    convert(): showdown.Converter;
    filecontent(): {
        data: any;
        content: any;
    };
    get data(): any;
    get content(): any;
    get postTitle(): any;
    get postDate(): string;
    get lastUpdatedDate(): string;
    get readingTime(): string;
    get json(): string;
    get convertedContent(): string;
    get postHtml(): string;
    get pageHtml(): string;
    get html(): string;
}
export default Converter;
//# sourceMappingURL=index.d.ts.map