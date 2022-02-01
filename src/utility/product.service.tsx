import {database} from "./mock/product";

export const productRequest = () => {

    // console.log(database);
    // return new Promise((resolve, reject) => {
    //     const data = database
    //     resolve(data);
    // })

    return database;

    
}