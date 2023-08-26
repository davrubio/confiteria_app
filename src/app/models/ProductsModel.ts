export class ProductsModel {
    constructor(
        public id: number,
        public sku: number,
        public name: string,
        public brand: string,
        public product_enabled: boolean
    ){}

    static createProduct(event: {
        sku: number,
        name: string,
        product_enabled: boolean,
    }){
        return {
            sku: event.sku,
            name: event.name,
            product_enabled: event.product_enabled
        }
    }
}