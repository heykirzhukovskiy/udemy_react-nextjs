import classNames from 'classnames'
import { ForwardedRef, forwardRef } from 'react'
import styles from './Input.module.css'
import { InputProps } from './Input.props'

export const Input = forwardRef(
	({ className, error, ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => (
		<div className={classNames(className, styles.inputWrapper)}>
			<input
				className={classNames(styles.input, {
					[styles.error]: !!error,
				})}
				ref={ref}
				{...props}
			/>
			{error && (
				<span role='alert' className={styles.errorMessage}>
					{error.message}
				</span>
			)}
		</div>
	),
)
