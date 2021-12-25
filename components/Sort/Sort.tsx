import { SortEnum, SortProps } from './Sort.props'
import styles from './Sort.module.css'
import classNames from 'classnames'
import { KeyboardEvent } from 'react'

export const Sort = ({ sort, setSort, isAscending, className, ...props }: SortProps): JSX.Element => {
	const keyDownHandler = (event: KeyboardEvent<HTMLSpanElement>, sortParam: SortEnum) => {
		if (event.code === 'Enter' || event.code === 'Space') {
			event.preventDefault()
			setSort(sortParam)
		}
	}

	return (
		<div className={classNames(styles.sort, className)} {...props}>
			<button
				className={classNames(styles.sortItem, { [styles.active]: sort === SortEnum.Rating })}
				onClick={() => setSort(SortEnum.Rating)}
				onKeyDown={e => keyDownHandler(e, SortEnum.Rating)}
				tabIndex={0}
			>
				<div
					className={classNames(styles.sortIcon, {
						[styles.desc]: !isAscending && sort === SortEnum.Rating,
						[styles.asc]: isAscending && sort === SortEnum.Rating,
					})}
				/>
				По рейтингу
			</button>
			<button
				className={classNames(styles.sortItem, { [styles.active]: sort === SortEnum.Price })}
				onClick={() => setSort(SortEnum.Price)}
				onKeyDown={e => keyDownHandler(e, SortEnum.Price)}
				tabIndex={0}
			>
				<div
					className={classNames(styles.sortIcon, {
						[styles.desc]: !isAscending && sort === SortEnum.Price,
						[styles.asc]: isAscending && sort === SortEnum.Price,
					})}
				/>
				По цене
			</button>
		</div>
	)
}
