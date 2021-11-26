import classNames from 'classnames'
import { ForwardedRef, forwardRef } from 'react'
import styles from './TextArea.module.css'
import { TextAreaProps } from './TextArea.props'

export const TextArea = forwardRef(
	({ className, rows = 3, ...props }: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => (
		<textarea rows={rows} className={classNames(className, styles.textarea)} ref={ref} {...props} />
	),
)
