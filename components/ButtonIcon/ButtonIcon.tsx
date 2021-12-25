import { ButtonIconProps } from './ButtonIcon.props'
import styles from './ButtonIcon.module.css'
import classNames from 'classnames'
import { Icon } from '..'

export const ButtonIcon = ({
	appearance,
	icon,
	className,
	direction,
	color,
	...props
}: ButtonIconProps): JSX.Element => (
	<button className={classNames(styles.button, className, styles[appearance])} {...props}>
		<Icon color={color} icon={icon} direction={direction} className={styles.icon} />
	</button>
)
