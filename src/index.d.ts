export { Converter as default };
declare class Converter {
    constructor(filePath: any);
    filePath: any;
    formatDate(date: any): string;
    readTime(text: any): number;
    lastUpdate(): any;
    convert(): any;
    filecontent(): {
        data: any;
        content: any;
    };
    get data(): any;
    get content(): any;
    get postTitle(): any;
    get postDate(): string;
    get lastUpdatedDate(): string;
    get readingTime(): number;
    get json(): string;
    get convertedContent(): any;
    get postHtml(): string;
    get pageHtml(): string;
}
//# sourceMappingURL=index.d.ts.map