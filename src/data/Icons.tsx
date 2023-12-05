import React, {ReactElement} from "react";

export function MeIcon(props: any): ReactElement {
    return (<svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
        <path clipRule="evenodd"
              d="M5.84 15.63a6.97 6.97 0 0 0 8.32 0 8.2 8.2 0 0 0-8.32 0zM4.7 14.57a7 7 0 1 1 10.6 0 9.7 9.7 0 0 0-10.6 0zM10 1.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17zm-1.5 7a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zm1.5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
              fill={props.color ? props.color : "currentColor"} fillRule="evenodd"></path>
    </svg>);
}

export function SettingsIcon(props: any): ReactElement {
    return (<svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
        <path clipRule="evenodd"
              d="M11.76 7.7c-.28-.27-.52-.51-.7-.73a2.3 2.3 0 0 1-.47-.77 2.25 2.25 0 0 1 0-1.4c.1-.3.27-.54.46-.77.19-.22.45-.48.73-.76l.25-.24.24-.25c.28-.28.54-.54.76-.73.23-.19.47-.36.77-.46.46-.14.94-.14 1.4 0 .3.1.54.27.77.46.22.19.46.43.74.7l.26.28.27.26c.28.28.52.52.7.74.2.23.37.47.47.77.14.46.14.94 0 1.4-.1.3-.27.54-.46.77-.19.22-.45.48-.73.76l-.25.24-.24.25c-.28.28-.54.54-.76.73-.23.19-.47.36-.77.46-.46.14-.94.14-1.4 0a2.3 2.3 0 0 1-.77-.46 13.4 13.4 0 0 1-.74-.7l-.26-.28-.27-.26zm4.4-1.03-.25.24-.24.25c-.3.3-.5.5-.67.64a.85.85 0 0 1-.27.18.75.75 0 0 1-.46 0A.86.86 0 0 1 14 7.8c-.16-.14-.36-.33-.67-.64l-.24-.25-.25-.24c-.3-.3-.5-.5-.64-.67a.85.85 0 0 1-.18-.27.75.75 0 0 1 0-.46.85.85 0 0 1 .18-.27c.14-.16.33-.36.64-.67l.25-.24.24-.25c.3-.3.5-.5.67-.64a.86.86 0 0 1 .27-.18.75.75 0 0 1 .46 0c.04.01.11.05.27.18.16.14.36.33.67.64l.24.25.25.24c.3.3.5.5.64.67.13.16.17.23.18.27.05.15.05.31 0 .46a.86.86 0 0 1-.18.27c-.14.16-.33.36-.64.67zM11 14.12c0-.4 0-.74.02-1.02.03-.3.08-.59.23-.87.21-.42.56-.77.98-.98.28-.15.58-.2.87-.23.28-.02.65-.02 1.05-.02h.7c.4 0 .77 0 1.05.02.3.03.59.08.87.23.42.21.77.56.98.98.15.28.2.58.23.87.02.28.02.63.02 1.02v.76c0 .4 0 .74-.02 1.02a2.25 2.25 0 0 1-1.2 1.86c-.3.14-.59.2-.88.22-.28.02-.65.02-1.05.02h-.7c-.4 0-.77 0-1.05-.02-.3-.03-.59-.08-.87-.23a2.25 2.25 0 0 1-.98-.98 2.3 2.3 0 0 1-.23-.87c-.02-.28-.02-.63-.02-1.02v-.38zm3.85 2.38h-.7c-.43 0-.71 0-.92-.02a.86.86 0 0 1-.32-.06.75.75 0 0 1-.33-.33.86.86 0 0 1-.06-.32c-.02-.2-.02-.49-.02-.92v-.7c0-.43 0-.71.02-.92.01-.2.04-.28.06-.32a.75.75 0 0 1 .33-.33.85.85 0 0 1 .32-.06c.2-.02.49-.02.92-.02h.7c.43 0 .71 0 .92.02.2.01.28.04.32.06.14.07.26.19.33.33.02.04.05.11.06.32.02.2.02.49.02.92v.7c0 .43 0 .71-.02.92a.86.86 0 0 1-.06.32.75.75 0 0 1-.33.33.86.86 0 0 1-.32.06c-.2.02-.49.02-.92.02zM2 5.12v.76c0 .4 0 .74.02 1.02a2.25 2.25 0 0 0 1.2 1.86c.3.14.59.2.88.22.28.02.65.02 1.05.02h.7c.4 0 .77 0 1.05-.02a2.25 2.25 0 0 0 1.86-1.2c.14-.3.2-.59.22-.88C9 6.62 9 6.27 9 5.88v-.76c0-.4 0-.74-.02-1.02a2.3 2.3 0 0 0-.23-.87 2.25 2.25 0 0 0-.98-.98 2.3 2.3 0 0 0-.87-.23C6.62 2 6.25 2 5.85 2h-.7c-.4 0-.77 0-1.05.02a2.25 2.25 0 0 0-1.86 1.2c-.14.3-.2.59-.22.88C2 4.38 2 4.73 2 5.12zM5.5 7.5h.35c.43 0 .71 0 .92-.02.2-.01.28-.04.32-.06a.75.75 0 0 0 .33-.33.85.85 0 0 0 .06-.32c.02-.2.02-.49.02-.92v-.7c0-.43 0-.71-.02-.92a.85.85 0 0 0-.06-.32.75.75 0 0 0-.33-.33.86.86 0 0 0-.32-.06c-.2-.02-.49-.02-.92-.02h-.7c-.43 0-.71 0-.92.02a.86.86 0 0 0-.32.06.75.75 0 0 0-.33.33.85.85 0 0 0-.06.32c-.02.2-.02.49-.02.92v.7c0 .43 0 .71.02.92.01.2.04.28.06.32.07.14.19.26.33.33.04.02.11.05.32.06.2.02.49.02.92.02zM2 14.12c0-.4 0-.74.02-1.02.03-.3.08-.59.23-.87.21-.42.56-.77.98-.98.28-.15.58-.2.87-.23.28-.02.65-.02 1.05-.02h.7c.4 0 .77 0 1.05.02.3.03.59.08.87.23.42.21.77.56.98.98.15.28.2.58.23.87.02.28.02.63.02 1.02v.76c0 .4 0 .74-.02 1.02a2.25 2.25 0 0 1-1.2 1.86c-.3.14-.59.2-.88.22-.28.02-.65.02-1.05.02h-.7c-.4 0-.77 0-1.05-.02a2.25 2.25 0 0 1-1.86-1.2 2.3 2.3 0 0 1-.22-.88C2 15.62 2 15.27 2 14.88v-.38zm3.85 2.38h-.7c-.43 0-.71 0-.92-.02a.86.86 0 0 1-.32-.06.75.75 0 0 1-.33-.33.85.85 0 0 1-.06-.32c-.02-.2-.02-.49-.02-.92v-.7c0-.43 0-.71.02-.92.01-.2.04-.28.06-.32a.75.75 0 0 1 .33-.33.85.85 0 0 1 .32-.06c.2-.02.49-.02.92-.02h.7c.43 0 .71 0 .92.02.2.01.28.04.32.06.14.07.26.19.33.33.02.04.05.11.06.32.02.2.02.49.02.92v.7c0 .43 0 .71-.02.92a.85.85 0 0 1-.06.32.75.75 0 0 1-.33.33.86.86 0 0 1-.32.06c-.2.02-.49.02-.92.02z"
              fill={props.color ? props.color : "currentColor"} fillRule="evenodd"></path>
    </svg>);
}

export function NewsIcon(props: any): ReactElement {
    return (<svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
        <path clipRule="evenodd"
              d="M11.84 2H8.16c-.93 0-1.67 0-2.26.05-.62.05-1.15.15-1.63.4a4.15 4.15 0 0 0-1.82 1.82 4.26 4.26 0 0 0-.4 1.63C2 6.5 2 7.23 2 8.16v3.68c0 .93 0 1.67.05 2.26.05.62.15 1.15.4 1.63.4.78 1.04 1.42 1.82 1.82.48.25 1.01.35 1.63.4.6.05 1.33.05 2.26.05h3.68c.93 0 1.67 0 2.26-.05a4.26 4.26 0 0 0 1.63-.4 4.15 4.15 0 0 0 1.82-1.82c.25-.48.35-1.01.4-1.63.05-.6.05-1.33.05-2.26V8.16c0-.93 0-1.67-.05-2.26a4.26 4.26 0 0 0-.4-1.63 4.15 4.15 0 0 0-1.82-1.82 4.26 4.26 0 0 0-1.63-.4C13.5 2 12.77 2 11.84 2zm-6.9 1.79c.25-.12.56-.2 1.08-.25.53-.04 1.2-.04 2.17-.04h3.62c.96 0 1.64 0 2.17.04.52.05.83.13 1.07.25.5.25.9.66 1.16 1.16.12.24.2.55.25 1.07l.02.48H3.52l.02-.48c.05-.52.13-.83.25-1.07.25-.5.66-.9 1.16-1.16zM3.5 8v3.81c0 .96 0 1.64.04 2.17.05.52.13.83.25 1.07.25.5.66.9 1.16 1.16.24.12.55.2 1.07.25.53.04 1.2.04 2.17.04h3.62c.96 0 1.64 0 2.17-.04a2.8 2.8 0 0 0 1.07-.25c.5-.25.9-.66 1.16-1.16.12-.24.2-.55.25-1.07.04-.53.04-1.2.04-2.17V8z"
              fill={props.color ? props.color : "currentColor"} fillRule="evenodd"></path>
    </svg>);
}

export function SearchIcon(props: any): ReactElement {
    return (<svg aria-hidden="true" display="block"
                 className="vkuiIcon vkuiIcon--16 vkuiIcon--w-16 vkuiIcon--h-16 vkuiIcon--search_outline_16"
                 viewBox="0 0 16 16" width="16" height="16">
        <use xlinkHref="#search_outline_16"></use>
    </svg>);
}

export function MusicIcon(props: any): ReactElement {
    return (<svg fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
        <path fill={props.color ? props.color : "currentColor"}
              d="M5.5 11a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-.75.75.75.75 0 0 1-.75-.75v-1A.75.75 0 0 1 5.5 11Zm3.75-.25a.75.75 0 0 0-1.5 0v2.75a.75.75 0 0 0 1.5 0v-2.75ZM14.5 10a.75.75 0 0 1 .75.76v2.8a.75.75 0 0 1-1.5-.01v-2.8a.75.75 0 0 1 .75-.75Zm-2.25-.74a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0v-4.5Z"></path>
        <path fill={props.color ? props.color : "currentColor"} fillRule="evenodd"
              d="M7.92 2c-.88 0-1.6 0-2.17.05a4.1 4.1 0 0 0-1.57.39 4 4 0 0 0-1.74 1.74 4.1 4.1 0 0 0-.4 1.57C2 6.33 2 7.04 2 7.92v4.16c0 .88 0 1.6.05 2.17.04.58.15 1.1.39 1.57a4 4 0 0 0 1.74 1.74c.48.24.99.35 1.57.4.58.04 1.29.04 2.17.04h4.16c.88 0 1.6 0 2.17-.05a4.1 4.1 0 0 0 1.57-.39 4 4 0 0 0 1.74-1.74c.24-.47.35-.99.4-1.57.04-.58.04-1.29.04-2.17V7.92c0-.88 0-1.6-.05-2.17a4.1 4.1 0 0 0-.39-1.57 4 4 0 0 0-1.74-1.74 4.1 4.1 0 0 0-1.57-.4C13.67 2 12.96 2 12.08 2H7.92ZM4.87 3.77c.22-.11.51-.19 1-.23.51-.04 1.16-.04 2.08-.04h4.1c.92 0 1.57 0 2.07.04.5.04.8.12 1.02.23a2.5 2.5 0 0 1 1.09 1.1c.11.22.19.51.23 1 .03.42.04.93.04 1.6-.38-.28-.85-.6-1.35-.9-1.04-.65-2.4-1.32-3.65-1.32-1.43 0-2.53.64-3.54 1.23l-.42.25A8.5 8.5 0 0 1 3.5 7.99v-.04c0-.92 0-1.57.04-2.07.04-.5.12-.8.23-1.01a2.5 2.5 0 0 1 1.1-1.1ZM3.5 9.5v2.55c0 .92 0 1.57.04 2.07.04.5.12.8.23 1.02a2.5 2.5 0 0 0 1.1 1.09c.22.11.51.19 1 .23.51.04 1.16.04 2.08.04h4.1c.92 0 1.57 0 2.07-.04.5-.04.8-.12 1.02-.23a2.5 2.5 0 0 0 1.09-1.1c.11-.22.19-.51.23-1 .04-.51.04-1.16.04-2.08V9.36a30.58 30.58 0 0 1-.17-.13c-.43-.33-1.14-.88-1.96-1.39a6.19 6.19 0 0 0-2.87-1.09c-1 0-1.73.42-2.77 1.02a70.79 70.79 0 0 1-.45.26A9.97 9.97 0 0 1 3.5 9.5Z"
              clipRule="evenodd"></path>
    </svg>);
}

export function VideoIcon(props: any): ReactElement {
    return (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill={props.color ? props.color : "currentColor"} viewBox="0 0 20 20">
        <path fillRule="evenodd"
              d="M10.37 2h1.31c.95 0 1.71 0 2.33.05.63.05 1.17.16 1.67.41a4.25 4.25 0 0 1 1.86 1.86c.25.5.36 1.04.4 1.67.06.61.06 1.37.06 2.33v3.36c0 .96 0 1.72-.05 2.33a4.39 4.39 0 0 1-.41 1.67 4.25 4.25 0 0 1-1.86 1.86c-.5.25-1.04.36-1.67.41-.62.05-1.38.05-2.33.05H8.32c-.96 0-1.72 0-2.33-.05a4.39 4.39 0 0 1-1.67-.41 4.25 4.25 0 0 1-1.86-1.86 4.39 4.39 0 0 1-.41-1.67C2 13.4 2 12.63 2 11.68V8.32c0-.96 0-1.72.05-2.33.05-.63.16-1.17.41-1.67a4.25 4.25 0 0 1 1.86-1.86c.5-.25 1.04-.36 1.67-.41C6.6 2 7.36 2 8.32 2h2.05ZM5 3.8c.23-.12.51-.2.96-.24a4.24 4.24 0 0 0-.8 1.51C5 5.65 5 6.33 5 7.37v5.7c0 .63 0 1.04.06 1.4a4.25 4.25 0 0 0 .9 1.97A2.67 2.67 0 0 1 5 16.2 2.75 2.75 0 0 1 3.8 15a2.92 2.92 0 0 1-.26-1.11c-.04-.55-.04-1.25-.04-2.24v-3.3c0-1 0-1.7.04-2.24.05-.54.13-.86.26-1.1A2.75 2.75 0 0 1 5 3.8ZM8.8 16.46c.21.04.48.04 1.21.04h1.65c1 0 1.7 0 2.24-.05a2.9 2.9 0 0 0 1.1-.25A2.75 2.75 0 0 0 16.2 15c.13-.25.21-.57.26-1.11.04-.55.04-1.25.04-2.24v-3.3c0-1 0-1.7-.04-2.24a2.9 2.9 0 0 0-.26-1.1A2.75 2.75 0 0 0 15 3.8a2.94 2.94 0 0 0-1.11-.26c-.55-.04-1.25-.04-2.24-.04H10.5c-1.22 0-1.66 0-2.01.1A2.75 2.75 0 0 0 6.6 5.5c-.1.35-.11.8-.11 2.01V13c0 .73 0 1 .04 1.21a2.75 2.75 0 0 0 2.25 2.25Zm2.75-9.33.03.02 1.84 1.09.03.01c.3.18.57.34.78.49.2.15.44.35.57.65.17.39.17.83 0 1.22-.13.3-.37.5-.57.65-.2.15-.48.3-.78.49l-.03.01-1.84 1.09-.03.02c-.3.17-.57.33-.8.44-.23.1-.53.22-.86.18a1.54 1.54 0 0 1-1.1-.63 1.6 1.6 0 0 1-.26-.82c-.02-.25-.02-.57-.02-.92V8.88c0-.36 0-.67.02-.92.03-.25.08-.55.27-.82a1.54 1.54 0 0 1 1.09-.63c.33-.04.63.07.86.18.23.1.5.27.8.44ZM10 7.9a.12.12 0 0 0-.05.03.93.93 0 0 0-.02.16c-.02.18-.02.44-.02.83v2.18c0 .4 0 .65.02.83a.86.86 0 0 0 .02.16.11.11 0 0 0 .05.03.9.9 0 0 0 .11-.05c.16-.07.37-.2.71-.4l1.85-1.08.7-.43a.9.9 0 0 0 .1-.1.18.18 0 0 0 0-.1.9.9 0 0 0-.1-.1 10.2 10.2 0 0 0-.7-.43l-1.85-1.09-.7-.4A1.04 1.04 0 0 0 10 7.9Z"
              clipRule="evenodd"></path>
    </svg>);
}
