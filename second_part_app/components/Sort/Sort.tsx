import { SortEnum, SortProps } from './Sort.props'
import styles from './Sort.module.css'
import classNames from 'classnames'

export const Sort = ({ sort, setSort, isAscending, className, ...props }: SortProps): JSX.Element => {
	return (
		<div className={classNames(styles.sort, className)} {...props}>
			<span
				className={classNames(styles.sortItem, { [styles.active]: sort === SortEnum.Rating })}
				onClick={() => setSort(SortEnum.Rating)}
			>
				<div
					className={classNames(styles.sortIcon, {
						[styles.desc]: !isAscending && sort === SortEnum.Rating,
						[styles.asc]: isAscending && sort === SortEnum.Rating,
					})}
				/>
				По рейтингу
			</span>
			<span
				className={classNames(styles.sortItem, { [styles.active]: sort === SortEnum.Price })}
				onClick={() => setSort(SortEnum.Price)}
			>
				<div
					className={classNames(styles.sortIcon, {
						[styles.desc]: !isAscending && sort === SortEnum.Price,
						[styles.asc]: isAscending && sort === SortEnum.Price,
					})}
				/>
				По цене
			</span>
		</div>
	)
}
