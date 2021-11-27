import styles from './Up.module.css'
import classNames from 'classnames'
import { useScrollY } from '../../hooks/useScrollY'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

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
		<motion.button
			initial={{ opacity: 0 }}
			animate={controls}
			onClick={scrollToTop}
			className={classNames(styles.up)}
		/>
	)
}
