import classNames from 'classnames'
import { ForwardedRef, forwardRef } from 'react'
import styles from './TextArea.module.css'
import { TextAreaProps } from './TextArea.props'

export const TextArea = forwardRef(
	({ className, error, rows = 3, ...props }: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => (
		<div className={classNames(className, styles.textareaWrap)}>
			<textarea rows={rows} className={classNames(styles.textarea, { [styles.error]: !!error })} ref={ref} {...props} />
			{error && (
				<span role='alert' className={styles.errorMessage}>
					{error.message}
				</span>
			)}
		</div>
	),
)
