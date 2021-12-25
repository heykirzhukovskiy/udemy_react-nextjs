import { P, Rating } from '..'
import styles from './Review.module.css'
import { ReviewProps } from './Review.props'
import UserIcon from './user.svg'

export const Review = ({
	review: { name, title, description, rating, createdAt, ...props },
}: ReviewProps): JSX.Element => (
	<>
		<div className={styles.review}>
			<div className={styles.head}>
				<div className={styles.title}>
					<UserIcon className={styles.icon} />
					<span>
						<P className={styles.reviewer}>{name}:</P>
						{title}
					</span>
				</div>
				<div className={styles.info}>
					<span>{new Date(createdAt).toLocaleDateString()}</span>
					<Rating rating={rating} />
				</div>
			</div>
			<P className={styles.description}>{description}</P>
		</div>
		<hr className={styles.hr} />
	</>
)
