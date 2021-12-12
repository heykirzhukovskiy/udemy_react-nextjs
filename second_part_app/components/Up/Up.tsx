import classNames from 'classnames'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { ButtonIcon } from '..'
import { useScrollY } from '../../hooks/useScrollY'
import { IconTypes } from '../Icon/Icon.props'
import styles from './Up.module.css'

export const Up = (): JSX.Element => {
	const controls = useAnimation()
	const y = useScrollY()

	useEffect(() => {
		controls.start({ opacity: y / (document.body.scrollHeight / 2) })
	}, [y, controls])

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={controls}
			onClick={scrollToTop}
			className={classNames(styles.wrapper)}
		>
			<ButtonIcon title='Go up' appearance='primary' icon={IconTypes.arrow} color='white' direction='Up' />
		</motion.div>
	)
}
