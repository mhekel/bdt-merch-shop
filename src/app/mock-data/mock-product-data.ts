import { Product } from '../models/product';

export class MockData {

    public static Products: Product[] = [
        {
            'id': 11,
            'title': 'OPPO F5 Youth (Gold, 32 GB)',
            'modelName': 'F5 Youth',
            'color': 'Gold',
            'productType': 'Apparel',
            'brand': 'OPPO',
            'price': 500
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
