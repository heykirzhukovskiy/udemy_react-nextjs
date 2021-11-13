import classNames from 'classnames'
import Logo from '../logo.svg'
import { Menu } from '../Menu/Menu'
import styles from './Sidebar.module.css'
import { SidebarProps } from './Sidebar.props'

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => (
	<aside className={classNames(className, styles.sidebar)} {...props}>
		<Logo />
		<div>Search</div>
		<Menu />
	</aside>
)
