import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface SortProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	sort: SortEnum
	setSort(sort: SortEnum): void
	isAscending?: boolean
}

export enum SortEnum {
	Rating,
	Price,
}
