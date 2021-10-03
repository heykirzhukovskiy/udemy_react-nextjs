import { ParagraphProps } from './P.props'
import styles from './P.module.css'
import cn from 'classnames'

export const P = ({ size = 'M', children, className, ...props }: ParagraphProps): JSX.Element => (
	<p
		className={cn(styles.p, className, {
			[styles.l]: size === 'L',
			[styles.m]: size === 'M',
			[styles.s]: size === 'S',
		})}
		{...props}
	>
		{children}
	</p>
)
