import classNames from 'classnames'
import { ForwardedRef, forwardRef } from 'react'
import styles from './Input.module.css'
import { InputProps } from './Input.props'

export const Input = forwardRef(
	({ className, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => (
		<input className={classNames(className, styles.input)} ref={ref} {...props} />
	),
)
