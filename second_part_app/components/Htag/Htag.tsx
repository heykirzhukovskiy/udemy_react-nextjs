import { HtagProps } from './Htag.props'
import styles from './Htag.module.css'

export const Htag = ({ tag, children }: HtagProps): JSX.Element => {
	switch (tag) {
		case 'h1':
			return (
				<h1 tabIndex={0} className={styles.h1}>
					{children}
				</h1>
			)
		case 'h2':
			return (
				<h2 tabIndex={0} className={styles.h2}>
					{children}
				</h2>
			)
		case 'h3':
			return (
				<h3 tabIndex={0} className={styles.h3}>
					{children}
				</h3>
			)
		default:
			return <></>
	}
}
