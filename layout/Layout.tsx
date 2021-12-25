import classNames from 'classnames'
import { FC, useState, KeyboardEvent, useRef } from 'react'
import { IAppContext, AppContextProvider } from '../context/app.context'
import { Footer } from './Footer/Footer'
import { Header } from './Header/Header'
import styles from './Layout.module.css'
import { LayoutProps } from './Layout.props'
import { Sidebar } from './Sidebar/Sidebar'

const Layout = ({ children }: LayoutProps): JSX.Element => {
	const [isDisplayedSkipLink, setIsDisplayedSkipLink] = useState<boolean>(false)
	const bodyRef = useRef<HTMLDivElement>(null)
	const skipContentAction = (event: KeyboardEvent) => {
		if (event.code === 'Enter' || event.code === 'Space') {
			event.preventDefault()
			bodyRef.current?.focus()
		}

		setIsDisplayedSkipLink(false)
	}

	return (
		<div className={styles.wrapper}>
			<a
				onFocus={() => setIsDisplayedSkipLink(true)}
				className={classNames(styles.skipLink, { [styles.displayedLink]: isDisplayedSkipLink })}
				tabIndex={0}
				onKeyDown={skipContentAction}
			>
				Перейти к содержанию
			</a>
			<Header className={styles.header} />
			<Sidebar className={styles.sidebar} />
			<main className={styles.body} ref={bodyRef} tabIndex={0}>
				{children}
			</main>
			<Footer className={styles.footer} />
		</div>
	)
}

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FC<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
				<Layout>
					<Component {...props} />
				</Layout>
			</AppContextProvider>
		)
	}
}
