import { Icon } from '..'
import { IconTypes } from '../Icon/Icon.props'
import styles from './Advantages.module.css'
import { AdvantagesProps } from './Advantages.props'

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => (
	<div className={styles.advantages}>
		{advantages.map(adv => (
			<div key={adv._id} className={styles.advantage}>
				<div className={styles.checkBox}>
					<Icon icon={IconTypes.check} color='green' />
				</div>
				<p className={styles.title}>{adv.title}</p>
				<hr className={styles.vline} />
				<span className={styles.description}>{adv.description}</span>
			</div>
		))}
	</div>
)
