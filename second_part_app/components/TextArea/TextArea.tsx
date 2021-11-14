import classNames from 'classnames'
import styles from './TextArea.module.css'
import { TextAreaProps } from './TextArea.props'

export const TextArea = ({ className, rows = 3, ...props }: TextAreaProps): JSX.Element => (
	<textarea rows={rows} className={classNames(className, styles.textarea)} {...props} />
)
