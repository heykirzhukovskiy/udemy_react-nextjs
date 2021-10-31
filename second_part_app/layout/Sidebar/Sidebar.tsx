import cn from 'classnames'
import styles from './Sidebar.module.css'
import { SidebarProps } from './Sidebar.props'

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => <aside {...props}>Sidebar</aside>
