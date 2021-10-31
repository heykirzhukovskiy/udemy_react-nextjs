import cn from 'classnames'
import styles from './Footer.module.css'
import { FooterProps } from './Footer.props'
import { format } from 'date-fns'

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => (
	<footer className={cn(className, styles.footer)} {...props}>
		<a href='#' target='_blank'>
			Пользовательское соглашение
		</a>
		<a href='#' target='_blank'>
			Политика конфиденциальности
		</a>
		<span>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</span>
	</footer>
)
