import classNames from 'classnames'
import { useForm, Controller } from 'react-hook-form'
import { Button, Input, P, Rating, TextArea } from '..'
import { IReviewForm } from './ReviewForm.interface'
import styles from './ReviewForm.module.css'
import { ReviewFormProps } from './ReviewForm.props'

export const ReviewForm = ({ ...props }: ReviewFormProps): JSX.Element => {
	console.warn('Неиспользуемые пропсы в ReviewForm:', props)

	const { register, control, handleSubmit } = useForm<IReviewForm>()

	const onSubmit = (data: IReviewForm) => {
		console.log(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<fieldset className={styles.title}>
				<Controller
					control={control}
					name='name'
					render={({ field }) => <Input placeholder='Имя' className={styles.input} {...field} />}
				/>
				<Controller
					control={control}
					name='title'
					render={({ field }) => <Input placeholder='Заголовок отзыва' className={styles.input} {...field} />}
				/>
			</fieldset>
			<div className={styles.ratingWrap}>
				<span>Оценка:</span>
				<Controller
					control={control}
					name='rating'
					render={({ field: { value, onChange } }) => <Rating rating={value} isEditable setRating={onChange} />}
				/>
			</div>
			<Controller
				control={control}
				name='description'
				render={({ field }) => <TextArea placeholder='Текст отзыва' className={styles.fullWidth} {...field} />}
			/>
			<div className={classNames(styles.action, styles.fullWidth)}>
				<Button appearance='primary' type='submit'>
					Отправить
				</Button>
				<span className={styles.warning}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
			</div>
			<div className={classNames(styles.success, styles.fullWidth)}>
				<P className={styles.successTitle}>Ваш отзыв отправлен</P>
				<span className={styles.closeIcon}></span>
			</div>
		</form>
	)
}
