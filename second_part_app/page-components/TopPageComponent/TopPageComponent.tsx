import { TopPageComponentProps } from './TopPageComponent.props'
import styles from './TopPageComponent.module.css'
import cn from 'classnames'
import { HHData, Htag, Tag } from '../../components'
import { TopLevelCategory } from '../../interfaces/page.interface'

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
			{firstCategory === TopLevelCategory.Courses && <HHData {...page.hh} />}
		</div>
	)
}
