import classNames from 'classnames'
import styles from './Input.module.css'
import { InputProps } from './Input.props'

export const Input = ({ className, ...props }: InputProps): JSX.Element => (
	<input className={classNames(className, styles.input)} {...props} />
)
