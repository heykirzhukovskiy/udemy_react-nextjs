import { ParagraphProps } from './P.props'
import styles from './P.module.css'
import classNames from 'classnames'

export const P = ({ size = 'M', children, className, ...props }: ParagraphProps): JSX.Element => (
	<p
		className={classNames(styles.p, className, {
			[styles.l]: size === 'L',
			[styles.m]: size === 'M',
			[styles.s]: size === 'S',
		})}
		{...props}
	>
		{children}
	</p>
)
