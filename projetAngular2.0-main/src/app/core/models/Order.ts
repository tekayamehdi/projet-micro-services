import {Address} from './User';
import {Product} from './Products';
export class Order {
    id: number;
    userId: number;
    sellerId: number;
    product: Product;
    deliveryAddress: Address;
    contact: number;
    dateTime: string;
}
