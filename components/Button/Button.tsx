import { ButtonProps } from './Button.props'
import styles from './Button.module.css'
import classNames from 'classnames'
import { Icon } from '..'
import { IconTypes } from '../Icon/Icon.props'

export const Button = ({ appearance, arrow = 'none', children, className, ...props }: ButtonProps): JSX.Element => (
	<button
		className={classNames(styles.button, className, {
			[styles.primary]: appearance == 'primary',
			[styles.ghost]: appearance == 'ghost',
		})}
		{...props}
	>
		{children}
		{arrow !== 'none' && (
			<Icon size='S' direction={arrow} icon={IconTypes.arrow} className={styles.arrow} color='black' />
		)}
	</button>
)
