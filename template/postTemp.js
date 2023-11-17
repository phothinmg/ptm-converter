
const htmlTemplate = (opts={}) =>{
    const pc = opts.postContent === undefined ? console.error('Error') :  opts.postContent;
    const tt = opts.postTitle === undefined ? '' : opts.postTitle ;
    const dat = opts.postDate === undefined ? '' : opts.postDate;
    const rt = opts.readingTime === undefined ? '' : opts.readingTime;
    const lud = opts.lastUpdate === undefined ? '' : opts.lastUpdate;
    const html = /* html */ `
        <div>
            <style>
                pre code.hljs {
                    display: block;
                    overflow-x: auto;
                    padding: 1em
                }

                code.hljs {
                    padding: 3px 5px
                }

                .hljs {
                    color: #c9d1d9;
                    background: #0d1117
                }

                .hljs-doctag,
                .hljs-keyword,
                .hljs-meta .hljs-keyword,
                .hljs-template-tag,
                .hljs-template-variable,
                .hljs-type,
                .hljs-variable.language_ {
                    color: #ff7b72
                }

                .hljs-title,
                .hljs-title.class_,
                .hljs-title.class_.inherited__,
                .hljs-title.function_ {
                    color: #d2a8ff
                }

                .hljs-attr,
                .hljs-attribute,
                .hljs-literal,
                .hljs-meta,
                .hljs-number,
                .hljs-operator,
                .hljs-selector-attr,
                .hljs-selector-class,
                .hljs-selector-id,
                .hljs-variable {
                    color: #79c0ff
                }

                .hljs-meta .hljs-string,
                .hljs-regexp,
                .hljs-string {
                    color: #a5d6ff
                }

                .hljs-built_in,
                .hljs-symbol {
                    color: #ffa657
                }

                .hljs-code,
                .hljs-comment,
                .hljs-formula {
                    color: #8b949e
                }

                .hljs-name,
                .hljs-quote,
                .hljs-selector-pseudo,
                .hljs-selector-tag {
                    color: #7ee787
                }

                .hljs-subst {
                    color: #c9d1d9
                }

                .hljs-section {
                    color: #1f6feb;
                    font-weight: 700
                }

                .hljs-bullet {
                    color: #f2cc60
                }

                .hljs-emphasis {
                    color: #c9d1d9;
                    font-style: italic
                }

                .hljs-strong {
                    color: #c9d1d9;
                    font-weight: 700
                }

                .hljs-addition {
                    color: #aff5b4;
                    background-color: #033a16
                }

                .hljs-deletion {
                    color: #ffdcd7;
                    background-color: #67060c
                }
            </style>
            <style>
                .hljs-copy-wrapper {
                        position: relative;
                        overflow: hidden
                    }

                    .hljs-copy-wrapper:hover .hljs-copy-button,
                    .hljs-copy-button:focus {
                        transform: translateX(0)
                    }

                    .hljs-copy-button {
                        position: absolute;
                        transform: translateX(calc(100% + 1.125em));
                        top: 1em;
                        right: 1em;
                        width: 2rem;
                        height: 2rem;
                        text-indent: -9999px;
                        color: #fff;
                        border-radius: .25rem;
                        border: 1px solid #ffffff22;
                        background-color: #2d2b57;
                        background-color: var(--hljs-theme-background);
                        background-image: url('data:image/svg+xml;utf-8,<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 5C5.73478 5 5.48043 5.10536 5.29289 5.29289C5.10536 5.48043 5 5.73478 5 6V20C5 20.2652 5.10536 20.5196 5.29289 20.7071C5.48043 20.8946 5.73478 21 6 21H18C18.2652 21 18.5196 20.8946 18.7071 20.7071C18.8946 20.5196 19 20.2652 19 20V6C19 5.73478 18.8946 5.48043 18.7071 5.29289C18.5196 5.10536 18.2652 5 18 5H16C15.4477 5 15 4.55228 15 4C15 3.44772 15.4477 3 16 3H18C18.7956 3 19.5587 3.31607 20.1213 3.87868C20.6839 4.44129 21 5.20435 21 6V20C21 20.7957 20.6839 21.5587 20.1213 22.1213C19.5587 22.6839 18.7957 23 18 23H6C5.20435 23 4.44129 22.6839 3.87868 22.1213C3.31607 21.5587 3 20.7957 3 20V6C3 5.20435 3.31607 4.44129 3.87868 3.87868C4.44129 3.31607 5.20435 3 6 3H8C8.55228 3 9 3.44772 9 4C9 4.55228 8.55228 5 8 5H6Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 3C7 1.89543 7.89543 1 9 1H15C16.1046 1 17 1.89543 17 3V5C17 6.10457 16.1046 7 15 7H9C7.89543 7 7 6.10457 7 5V3ZM15 3H9V5H15V3Z" fill="white"/></svg>');
                        background-repeat: no-repeat;
                        background-position: center;
                        transition: background-color 200ms ease, transform 200ms ease-out
                    }

                    .hljs-copy-button:hover {
                        border-color: #ffffff44
                    }

                    .hljs-copy-button:active {
                        border-color: #ffffff66
                    }

                    .hljs-copy-button[data-copied="true"] {
                        text-indent: 0;
                        width: auto;
                        background-image: none
                    }

                    @media(prefers-reduced-motion) {
                        .hljs-copy-button {
                            transition: none
                        }
                    }

                    .hljs-copy-alert {
                        clip: rect(0 0 0 0);
                        clip-path: inset(50%);
                        height: 1px;
                        overflow: hidden;
                        position: absolute;
                        white-space: nowrap;
                        width: 1px
                    }
            </style>
            <h2>${tt}</h2>
            <small>${dat}</small>
            <small>Reading Time : ${rt} minutes</small>
            <div>${pc}</div>
            <small>Last Update : ${lud}</small>
        </div>
        <script src = "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js"></script>
        <script src = "https://unpkg.com/highlightjs-copy/dist/highlightjs-copy.min.js"></script>
        <script src = "https://cdn.jsdelivr.net/gh/phothinmg/burma@main/css/six-general.js"></script>
    
    `;
    return html
}

export default htmlTemplate;