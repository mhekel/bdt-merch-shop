import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryProductService extends InMemoryDbService {

  createDb() {
    const products = [
      {
        'id': 11,
        'title': 'Adult Unisex Basic Tee',
        'proctSizes': 'S-4x',
        'color': 'Gold',
        'productType': 'Apparel',
        'brand': 'OPPO',
        'price': 15.99
      },
      {
        'id': 12,
        'title': 'Dell Inspiron 7000',
        'modelName': 'Inspiron',
        'color': 'Gray',
        'productType': 'Design',
        'brand': 'DELL',
        'price': 59990
      }
    ];
    return { products };
  }

}
