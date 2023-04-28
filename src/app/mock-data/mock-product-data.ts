import { Product } from '../models/product';

export class MockData {

    public static Products: Product[] = [
        {
            'id': 11,
            'title': ' Adult Unisex Basic Tee',
            'productSizes': 'S-4x',
            'color': 'Gold',
            'productType': 'Apparel',
            'brand': 'Gilden',
            'price': 15.99
        },
        {
            'id': 12,
            'title': 'Dell Inspiron 7000',
            'modelName': 'Inspiron',
            'color': 'Gray',
            'productType': 'Design',
            'brand': 'DELL',
            'price': 599
        }
    ];

}
