import { FC } from 'react'
import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'
import styles from './Layout.module.css'
import { LayoutProps } from './Layout.props'
import { Sidebar } from './Sidebar/Sidebar'

const Layout = ({ children }: LayoutProps): JSX.Element => (
	<div className={styles.wrapper}>
		<Header className={styles.header} />
		<Sidebar className={styles.sidebar} />
		<main className={styles.body}>{children}</main>
		<Footer className={styles.footer} />
	</div>
)

export const withLayout = <T extends Record<string, unknown>>(Component: FC<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		)
	}
}