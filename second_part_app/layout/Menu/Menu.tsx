import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { AppContext } from '../../context/app.context'
import { firstLevelMenu } from '../../helpers/helpers'
import { PageItem } from '../../interfaces/menu.interface'
import styles from './Menu.module.css'

export const Menu = (): JSX.Element => {
	const { menu, setMenu } = useContext(AppContext)
	const { asPath } = useRouter()

	const openSecondMenu = (secondCategory: string) => {
		setMenu &&
			setMenu(
				menu.map(m => ({
					...m,
					isOpen: m._id.secondCategory === secondCategory,
				})),
			)
	}

	const buildFirstLevel = () =>
		firstLevelMenu.map(menu => {
			const isActive = asPath.includes(menu.route)

			return (
				<div key={menu.route}>
					<Link href={`/${menu.route}`}>
						<a
							className={classNames(styles.firstLevel, {
								[styles.firstLevelActive]: isActive,
							})}
						>
							{menu.icon} <span>{menu.name}</span>
						</a>
					</Link>
					<ul className={classNames(styles.firstLevelSub, { [styles.firstLevelSubOpen]: isActive })}>
						{buildSecondLevel(menu.route)}
					</ul>
				</div>
			)
		})

	const buildSecondLevel = (route: string) =>
		menu.map(menuItem => {
			if (menuItem.pages.map(page => page.alias).includes(asPath.split('/')[2])) {
				menuItem.isOpen = true
			}
			return (
				<li key={menuItem._id.secondCategory} className={classNames(styles.secondLevel)}>
					<span onClick={() => openSecondMenu(menuItem._id.secondCategory)}>{menuItem._id.secondCategory}</span>
					<ul className={classNames(styles.secondLevelSub, { [styles.secondLevelSubOpen]: menuItem.isOpen })}>
						{buildThirdLevel(menuItem.pages, route)}
					</ul>
				</li>
			)
		})

	const buildThirdLevel = (pages: PageItem[], route: string) =>
		pages.map(page => (
			<li
				key={page._id}
				className={classNames(styles.thirdLevel, {
					[styles.thirdLevelActive]: `/${route}/${page.alias}` === asPath,
				})}
			>
				<Link href={`/${route}/${page.alias}`}>
					<a>{page.category}</a>
				</Link>
			</li>
		))

	return <nav className={styles.menu}>{buildFirstLevel()}</nav>
}
