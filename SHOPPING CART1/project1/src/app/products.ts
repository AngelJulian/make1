import { MyData } from './my-data';

export const PRODUCTS: MyData[] = [
    { item: "White Wine", qtty: 3, unitcost: 3.95, totalCost: Math.round(3 * 3.95 *100)/100},
    { item: "Red Wine", qtty: 7, unitcost: 12.95, totalCost: Math.round(7 * 12.95 * 100)/100},
    { item: "Blue Wine", qtty: 5, unitcost: 6.95, totalCost: Math.round(5 * 6.95 * 100)/100}
];