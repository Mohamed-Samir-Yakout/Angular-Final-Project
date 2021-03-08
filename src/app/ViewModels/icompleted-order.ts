import { Iorder } from "./iorder";

export interface IcompletedOrder {
    order: Iorder[],
    deliveryfee: number,
    totalprice: number

}
