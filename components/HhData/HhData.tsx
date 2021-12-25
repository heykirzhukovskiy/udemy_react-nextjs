import { Card } from '..'
import { priceRU } from '../../helpers/helpers'
import styles from './HhData.module.css'
import { HHDataProps } from './HhData.props'
import Star from './Star.svg'

export const HHData = ({ count, juniorSalary, middleSalary, seniorSalary }: HHDataProps): JSX.Element => (
	<div className={styles.hh}>
		<Card className={styles.hhCard}>
			<span className={styles.title}>Всего вакансий</span>
			<p className={styles.count}>{count}</p>
		</Card>
		<Card className={styles.salary}>
			<div className={styles.salaryItem}>
				<span className={styles.title}>Начальный</span>
				<p className={styles.salaryValue}>{priceRU(juniorSalary)}</p>
				<div className={styles.rate}>
					<Star className={styles.rateStarFilled} />
					<Star className={styles.rateStar} />
					<Star className={styles.rateStar} />
				</div>
			</div>
			<hr className={styles.salaryHr} />
			<div className={styles.salaryItem}>
				<span className={styles.title}>Средний</span>
				<p className={styles.salaryValue}>{priceRU(middleSalary)}</p>
				<div className={styles.rate}>
					<Star className={styles.rateStarFilled} />
					<Star className={styles.rateStarFilled} />
					<Star className={styles.rateStar} />
				</div>
			</div>
			<hr className={styles.salaryHr} />
			<div className={styles.salaryItem}>
				<span className={styles.title}>Профессионал</span>
				<p className={styles.salaryValue}>{priceRU(seniorSalary)}</p>
				<div className={styles.rate}>
					<Star className={styles.rateStarFilled} />
					<Star className={styles.rateStarFilled} />
					<Star className={styles.rateStarFilled} />
				</div>
			</div>
		</Card>
	</div>
)
