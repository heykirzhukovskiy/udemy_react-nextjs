import { useEffect, useReducer } from 'react'
import { HHData, Htag, Product, Sort, Tag } from '../../components'
import { Advantages } from '../../components/Advantages/Advantages'
import { SortEnum } from '../../components/Sort/Sort.props'
import { TopLevelCategory } from '../../interfaces/page.interface'
import { sortReducer } from './sort.reducer'
import styles from './TopPageComponent.module.css'
import { TopPageComponentProps } from './TopPageComponent.props'

export const TopPageComponent = ({ firstCategory, page, products }: TopPageComponentProps): JSX.Element => {
	const [{ products: sortedProducts, sort, isAscending }, dispatchSort] = useReducer(sortReducer, {
		products,
		sort: SortEnum.Rating,
		isAscending: false,
	})

	useEffect(() => {
		dispatchSort({ type: 'reset', initialState: products })
	}, [products])

	const handleSort = (sort: SortEnum) => dispatchSort({ type: sort })

	return (
		<div className={styles.wrap}>
			<section className={styles.title}>
				<Htag tag='h1'>{page.title}</Htag>
				{products.length > 0 && (
					<Tag color='gray' size='M'>
						{products.length}
					</Tag>
				)}
				<Sort sort={sort} setSort={handleSort} isAscending={isAscending} />
			</section>
			<section className={styles.productsSection}>
				{sortedProducts && sortedProducts.map(p => <Product key={p._id} product={p} />)}
			</section>
			{page.hh && (
				<section className={styles.hhSection}>
					<div className={styles.hhTitle}>
						<Htag tag='h2'>Вакансии - {page.category}</Htag>
						<Tag color='red' size='M'>
							hh.ru
						</Tag>
					</div>
					{firstCategory === TopLevelCategory.Courses && <HHData {...page.hh} />}
				</section>
			)}
			{page.advantages && page.advantages.length > 0 && (
				<section className={styles.advantagesSection}>
					<Htag tag='h2'>Преимущества</Htag>
					<Advantages advantages={page.advantages} />
				</section>
			)}
			{page.seoText && <section className={styles.seoSection} dangerouslySetInnerHTML={{ __html: page.seoText }} />}

			<section className={styles.skillsSection}>
				<Htag tag='h2'>Получаемые навыки</Htag>
				<div className={styles.skills}>
					{page.tags.map(t => (
						<Tag key={t} color='primary'>
							{t}
						</Tag>
					))}
				</div>
			</section>
		</div>
	)
}
