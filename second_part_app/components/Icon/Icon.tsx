import classNames from 'classnames'
import styles from './Icon.module.css'
import { IconProps } from './Icon.props'

export const Icon = ({ className, icon, color = 'white', size = 'M', direction = 'Right' }: IconProps): JSX.Element => {
	console.log(size)
	return (
		<span
			className={classNames(styles.icon, styles[size], styles[icon], styles[direction], styles[color], className)}
		/>
	)
}
