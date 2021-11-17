import classNames from 'classnames'
import { Button, Input, P, Rating, TextArea } from '..'
import styles from './ReviewForm.module.css'
import { ReviewFormProps } from './ReviewForm.props'

export const ReviewForm = ({ productId }: ReviewFormProps): JSX.Element => {
	console.log('ReviewFormProps', productId)

	const handleSetRating = () => {}

	return (
		<form className={styles.form}>
			<fieldset className={styles.title}>
				<Input placeholder='Имя' className={styles.input} />
				<Input placeholder='Заголовок отзыва' className={styles.input} />
			</fieldset>
			<div className={styles.ratingWrap}>
				<span>Оценка:</span>
				<Rating rating={0} isEditable setRating={handleSetRating} />
			</div>
			<TextArea className={styles.fullWidth} placeholder='Текст отзыва' />
			<div className={classNames(styles.action, styles.fullWidth)}>
				<Button appearance='primary'>Отправить</Button>
				<span className={styles.warning}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
			</div>
			<div className={classNames(styles.success, styles.fullWidth)}>
				<P className={styles.successTitle}>Ваш отзыв отправлен</P>
				<span className={styles.closeIcon}></span>
			</div>
		</form>
	)
}
