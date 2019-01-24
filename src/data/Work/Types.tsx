export interface WorkType {
    id:string,
    name:string,
    description:string,
    link:string,
    made_with:string[],
    embeds:EmbedType[],
    start_date?:string,
    end_date?:string,
    banner?:string,
    type?:'job'|'freelance'|'personal'
    github:string,
}

export interface EmbedType {
    type:string,
    description:string,
    url:string,
}


export interface CreateWorkRequestArgs {
    name:string,
    uuid:string,
}

export interface CreateWorkResponseArgs extends WorkType {

}

export interface UpdateWorkResponseArgs extends WorkType {

}

export interface DeleteWorkResponseArgs {
    uuid: string,
}

export interface QueryWorkResponseArgs extends WorkType {

}