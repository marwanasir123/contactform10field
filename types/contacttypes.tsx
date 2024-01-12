export type contacttype={
    name:string,
    lastname:string,
    phone:number,
    email:string,
    password:string,
    address:string,
    postelcode:string,
    message:string,
    city:string
}
export type onChangeEventHandler={
    target:
        {value:string,name:string}
}