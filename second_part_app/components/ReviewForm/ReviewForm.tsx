import classNames from 'classnames'
import { useForm, Controller } from 'react-hook-form'
import { Button, Input, P, Rating, TextArea } from '..'
import { IReviewForm } from './ReviewForm.interface'
import styles from './ReviewForm.module.css'
import { ReviewFormProps } from './ReviewForm.props'

export const ReviewForm = ({ ...props }: ReviewFormProps): JSX.Element => {
	console.warn('Неиспользуемые пропсы в ReviewForm:', props)

	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<IReviewForm>()

	const onSubmit = (data: IReviewForm) => {
		console.log(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<fieldset className={styles.title}>
				<Input
					placeholder='Имя'
					className={styles.input}
					error={errors.name}
					{...register('name', { required: { value: true, message: 'Fill me!' } })}
				/>
				<Input
					error={errors.title}
					placeholder='Заголовок отзыва'
					className={styles.input}
					{...register('title', { required: { value: true, message: 'Fill me too!' } })}
				/>
			</fieldset>
			<div className={styles.ratingWrap}>
				<span>Оценка:</span>
				<Controller
					control={control}
					name='rating'
					render={({ field: { value, onChange, ...field } }) => (
						<Rating rating={value} isEditable setRating={onChange} {...field} />
					)}
				/>
			</div>
			<TextArea
				error={errors.description}
				placeholder='Текст отзыва'
				className={styles.fullWidth}
				{...register('description', { required: { value: true, message: 'And meeeeeeee' } })}
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
