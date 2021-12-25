import classNames from 'classnames'
import { ForwardedRef, forwardRef } from 'react'
import styles from './Card.module.css'
import { CardProps } from './Card.props'

export const Card = forwardRef(
	({ color = 'white', children, className, ...props }: CardProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => (
		<div className={classNames(styles.card, className, styles[color])} ref={ref} {...props}>
			{children}
		</div>
	),
)
