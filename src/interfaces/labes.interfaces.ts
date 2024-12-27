export interface GithubLabel {
    id: number;
    node_id: string;
    url: string;
    name: string;
    color: string;
    default: boolean;
    description: null;
}

export enum State {
    All = ' all',
    Open = 'open',
    Close = 'closed'
}