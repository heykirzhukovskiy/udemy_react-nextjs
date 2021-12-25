import classNames from 'classnames'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { KeyboardEvent, useContext } from 'react'
import { AppContext } from '../../context/app.context'
import { firstLevelMenu } from '../../helpers/helpers'
import { PageItem } from '../../interfaces/menu.interface'
import styles from './Menu.module.css'

export const Menu = (): JSX.Element => {
	const { menu, setMenu } = useContext(AppContext)
	const { asPath } = useRouter()

	const secondLevelAnim = {
		visible: {
			transition: {
				when: 'beforeChildren',
				staggerChildren: 0.1,
			},
			height: 'auto',
		},
		hidden: {
			transition: {
				when: 'afterChildren',
			},
			height: 0,
		},
	}

	const thirdLevelAnim = {
		visible: {
			height: 'auto',
			opacity: 1,
		},
		hidden: {
			opacity: 0,
			height: 0,
		},
	}

	const openSecondMenu = (secondCategory: string) => {
		setMenu &&
			setMenu(
				menu.map(m => ({
					...m,
					isOpen: m._id.secondCategory === secondCategory,
				})),
			)
	}

	const openSecondLevelByKey = (event: KeyboardEvent, secondCategory: string) => {
		if (event.code === 'Enter' || event.code === 'Space') {
			event.preventDefault()
			openSecondMenu(secondCategory)
		}
	}

	const buildFirstLevel = () =>
		firstLevelMenu.map(menu => {
			const isActive = asPath.includes(menu.route)

			return (
				<li key={menu.route}>
					<Link href={`/${menu.route}`}>
						<a
							className={classNames(styles.firstLevel, {
								[styles.firstLevelActive]: isActive,
							})}
							title={menu.name}
							tabIndex={0}
						>
							{menu.icon} <span>{menu.name}</span>
						</a>
					</Link>
					<ul className={classNames(styles.firstLevelSub, { [styles.firstLevelSubOpen]: isActive })}>
						{isActive && buildSecondLevel(menu.route)}
					</ul>
				</li>
			)
		})

	const buildSecondLevel = (route: string) =>
		menu?.map(menuItem => {
			if (menuItem.pages.map(page => page.alias).includes(asPath.split('/')[2])) {
				menuItem.isOpen = true
			}
			return (
				<li key={menuItem._id.secondCategory} className={classNames(styles.secondLevel)}>
					<span
						tabIndex={0}
						onKeyDown={(event: KeyboardEvent) => openSecondLevelByKey(event, menuItem._id.secondCategory)}
						onClick={() => openSecondMenu(menuItem._id.secondCategory)}
					>
						{menuItem._id.secondCategory}
					</span>
					<motion.ul
						layout
						variants={secondLevelAnim}
						initial={menuItem.isOpen ? 'visible' : 'hidden'}
						animate={menuItem.isOpen ? 'visible' : 'hidden'}
						className={classNames(styles.secondLevelSub, { [styles.secondLevelSubOpen]: menuItem.isOpen })}
					>
						{buildThirdLevel(menuItem.pages, route, menuItem.isOpen)}
					</motion.ul>
				</li>
			)
		})

	const buildThirdLevel = (pages: PageItem[], route: string, shouldHaveTabIndex?: boolean) =>
		pages?.map(page => (
			<motion.li
				variants={thirdLevelAnim}
				key={page._id}
				className={classNames(styles.thirdLevel, {
					[styles.thirdLevelActive]: `/${route}/${page.alias}` === asPath,
				})}
			>
				<Link href={`/${route}/${page.alias}`}>
					<a tabIndex={shouldHaveTabIndex ? 0 : -1} title={page.category}>
						{page.category}
					</a>
				</Link>
			</motion.li>
		))

	return (
		<nav>
			<ul className={styles.menu}>{buildFirstLevel()}</ul>
		</nav>
	)
}
