import classNames from 'classnames'
import Link from 'next/link'
import { Search } from '../../components'
import Logo from '../logo.svg'
import { Menu } from '../Menu/Menu'
import styles from './Sidebar.module.css'
import { SidebarProps } from './Sidebar.props'

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => (
	<aside className={classNames(className, styles.sidebar)} {...props}>
		<Link href={`/`}>
			<a title='Go to Home page' className={styles.sidebarLogo}>
				<Logo />
			</a>
		</Link>
		<Search />
		<Menu />
	</aside>
)
