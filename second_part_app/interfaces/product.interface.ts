export interface ProductCharacteristic {
	value: string
	name: string
}

export interface ProductReviewModel {
	_id: string
	name: string
	title: string
	description: string
	rating: number
	createdAt: Date
}

export interface ProductModel {
	__v: number
	_id: string
	advantages: string
	categories: string[]
	characteristics: ProductCharacteristic[]
	createdAt: Date
	credit: number
	description: string
	html: string
	image: string
	initialRating: number
	link: string
	oldPrice: number
	price: number
	reviewAvg?: number
	reviewCount: number
	reviews: ProductReviewModel[]
	tags: string[]
	title: string
	updatedAt: Date
}
