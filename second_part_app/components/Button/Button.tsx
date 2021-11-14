import { ButtonProps } from './Button.props'
import styles from './Button.module.css'
import classNames from 'classnames'
import ArrowIcon from './arrow.svg'

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
			<span
				className={classNames(styles.arrow, {
					[styles.down]: arrow === 'down',
					[styles.right]: arrow === 'right',
				})}
			>
				<ArrowIcon />
			</span>
		)}
	</button>
)
