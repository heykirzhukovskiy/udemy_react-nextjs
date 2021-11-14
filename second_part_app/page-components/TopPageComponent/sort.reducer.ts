import { ProductModel } from './../../interfaces/product.interface'
import { SortEnum } from './../../components/Sort/Sort.props'

export type SortActions = { type: SortEnum.Price } | { type: SortEnum.Rating }

export interface SortReducerState {
	sort: SortEnum
	products: ProductModel[]
	isAscending: boolean
}

export const sortReducer = (state: SortReducerState, action: SortActions): SortReducerState => {
	switch (action.type) {
		case SortEnum.Price:
			return {
				sort: SortEnum.Price,
				products:
					state.sort === SortEnum.Price
						? state.products.reverse()
						: state.products.sort((a, b) => (a.credit > b.credit ? -1 : 1)),
				isAscending: state.sort === SortEnum.Price ? !state.isAscending : true,
			}
		case SortEnum.Rating:
			return {
				sort: SortEnum.Rating,
				products:
					state.sort === SortEnum.Rating
						? state.products.reverse()
						: state.products.sort((a, b) => (a.initialRating > b.initialRating ? -1 : 1)),
				isAscending: state.sort === SortEnum.Rating ? !state.isAscending : false,
			}
		default:
			throw new Error('Неверный тип сортировки')
	}
}
