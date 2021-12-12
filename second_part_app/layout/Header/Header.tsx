import classNames from 'classnames'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { ButtonIcon } from '../../components'
import { IconTypes } from '../../components/Icon/Icon.props'
import Logo from '../logo.svg'
import { Sidebar } from '../Sidebar/Sidebar'
import styles from './Header.module.css'
import { HeaderProps } from './Header.props'

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	const [isMenuShown, setMenuShown] = useState<boolean>(false)
	const router = useRouter()

	useEffect(() => {
		setMenuShown(false)
	}, [router])

	const variants = {
		opened: {
			opacity: 1,
			x: 0,
			transition: {
				stiffness: 20,
			},
		},
		closed: {
			opacity: 0,
			x: '100%',
		},
	}

	return (
		<header className={classNames(styles.header, className)} {...props}>
			<Logo />
			<ButtonIcon onClick={() => setMenuShown(true)} appearance='ghost' color='primary' icon={IconTypes.burger} />
			<motion.div
				className={classNames(styles.mobileMenu)}
				variants={variants}
				initial={'closed'}
				animate={isMenuShown ? 'opened' : 'closed'}
			>
				<Sidebar />
				<ButtonIcon
					appearance='ghost'
					icon={IconTypes.close}
					color='primary'
					onClick={() => setMenuShown(false)}
					className={classNames(styles.menuClose)}
				/>
			</motion.div>
		</header>
	)
}
