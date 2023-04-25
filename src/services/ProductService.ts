export interface Products {
	name: string;
	id: string;
	imageURL: string;
	available: boolean;
	releaseDate: number;
	description: string;
	longDescription: string;
	rating: number;
	price: {
		value: number;
		currency: string;
	};
}

export interface ProductApiResponse {
	header: {
		headerTitle: string;
		headerDescription: string;
	};
	filters: string[];
	products: Products[];
}

export class ProductService {
	private apiUrl = "https://gist.githubusercontent.com/benfranke/c33280a8df5f4f9db2e63ad45cab26a4/raw/f3ad6c00ff520c2667305103d5705bcbb57a7778/products.json";

	async getProducts(availableOnly?: boolean): Promise<Products[]> {
		try {
			const response = await fetch(this.apiUrl);
			const data: ProductApiResponse = await response.json();
			const products = data.products;

			if (availableOnly) {
				return products.filter((product) => product.available);
			}

			return products;
		} catch (error) {
			console.error(`Error in ProductService.getProducts(): ${error}`);
			throw new Error("Failed to retrieve products");
		}
	}

	async getById(id): Promise<Products | undefined> {
		try {
			const products = await this.getProducts();
			return products.find((product) => product.id == id);
		} catch (error) {
			console.error(`Error in ProductService.getById(): ${error}`);
			throw new Error(`Failed to retrieve product with id ${id}`);
		}
	}
}


