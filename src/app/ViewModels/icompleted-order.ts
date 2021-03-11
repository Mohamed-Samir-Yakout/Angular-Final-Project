import { Iorder } from "./iorder";

export interface IcompletedOrder {
    userEmail: string,
    order: Iorder[],
    deliveryfee: number,
    totalprice: number,
    resturant: string

}
