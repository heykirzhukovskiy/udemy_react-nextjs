import { HHData, Htag, Tag } from '../../components'
import { TopLevelCategory } from '../../interfaces/page.interface'
import styles from './TopPageComponent.module.css'
import { TopPageComponentProps } from './TopPageComponent.props'

export const TopPageComponent = ({ firstCategory, page, products }: TopPageComponentProps): JSX.Element => {
	return (
		<div className={styles.wrap}>
			<div className={styles.title}>
				<Htag tag='h1'>{page.title}</Htag>
				{products.length > 0 && (
					<Tag color='gray' size='M'>
						{products.length}
					</Tag>
				)}
				<span>Sorting</span>
			</div>
			<div>{products && products.map(p => <div key={p._id}>{p.title}</div>)}</div>
			<div className={styles.hhTitle}>
				<Htag tag='h2'>Вакансии - {page.category}</Htag>
				<Tag color='red' size='M'>
					hh.ru
				</Tag>
			</div>
			{firstCategory === TopLevelCategory.Courses && page.hh && <HHData {...page.hh} />}
		</div>
	)
}
