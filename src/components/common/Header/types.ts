export interface SingleHeaderItem {
    path?:string,
    redirect?:string,
    sameWindow?:boolean,
    label:string
    icon: (...args:any) => void
}