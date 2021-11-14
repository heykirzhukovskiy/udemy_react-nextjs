import { CardProps } from './Card.props'
import styles from './Card.module.css'
import classNames from 'classnames'

export const Card = ({ color = 'white', children, className, ...props }: CardProps): JSX.Element => (
	<div className={classNames(styles.card, className, styles[color])} {...props}>
		{children}
	</div>
)
