export interface SingleHeaderItem {
    path?:string,
    redirect?:string,
    label:string
    icon: (...args:any) => void
}