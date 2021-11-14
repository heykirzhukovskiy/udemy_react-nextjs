import { HHData, Htag, P, Tag } from '../../components'
import { Advantages } from '../../components/Advantages/Advantages'
import { TopLevelCategory } from '../../interfaces/page.interface'
import styles from './TopPageComponent.module.css'
import { TopPageComponentProps } from './TopPageComponent.props'

export const TopPageComponent = ({ firstCategory, page, products }: TopPageComponentProps): JSX.Element => {
	return (
		<div className={styles.wrap}>
			<section className={styles.title}>
				<Htag tag='h1'>{page.title}</Htag>
				{products.length > 0 && (
					<Tag color='gray' size='M'>
						{products.length}
					</Tag>
				)}
				<span>Sorting</span>
			</section>
			<section>{products && products.map(p => <div key={p._id}>{p.title}</div>)}</section>
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
			<section className={styles.seoSection}>{page.seoText && page.seoText}</section>
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
