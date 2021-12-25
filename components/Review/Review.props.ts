import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { ProductReviewModel } from '../../interfaces/product.interface'

export interface ReviewProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	review: ProductReviewModel
}
