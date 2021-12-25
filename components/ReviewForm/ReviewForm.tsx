import axios from 'axios'
import classNames from 'classnames'
import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Button, Input, P, Rating, TextArea } from '..'
import { API } from '../../helpers/api'
import { IReviewForm, IReviewSendResponse } from './ReviewForm.interface'
import styles from './ReviewForm.module.css'
import { ReviewFormProps } from './ReviewForm.props'

export const ReviewForm = ({ productId, isOpened }: ReviewFormProps): JSX.Element => {
	const {
		control,
		formState: { errors },
		handleSubmit,
		register,
		reset,
		clearErrors,
	} = useForm<IReviewForm>()
	const [isSuccess, setIsSuccess] = useState<boolean>(false)
	const [error, setError] = useState<string>('')

	const onSubmit = async (formData: IReviewForm) => {
		try {
			const { data } = await axios.post<IReviewSendResponse>(API.review.createDemo, { ...formData, productId })
			if (data.message) {
				setIsSuccess(true)
				reset()
			} else {
				setError('Some shit happened')
			}
		} catch (e) {
			setError((e as any).message)
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
			<fieldset className={styles.title}>
				<Input
					placeholder='Имя'
					className={styles.input}
					error={errors.name}
					aria-invalid={!!errors.name}
					tabIndex={isOpened ? 0 : -1}
					{...register('name', { required: { value: true, message: 'Fill me!' } })}
				/>
				<Input
					error={errors.title}
					placeholder='Заголовок отзыва'
					className={styles.input}
					tabIndex={isOpened ? 0 : -1}
					aria-invalid={!!errors.title}
					{...register('title', { required: { value: true, message: 'Fill me too!' } })}
				/>
			</fieldset>
			<div className={styles.ratingWrap}>
				<span>Оценка:</span>
				<Controller
					control={control}
					name='rating'
					rules={{ required: { value: true, message: 'Fill meeee' } }}
					render={({ field: { value, onChange, ...field } }) => (
						<Rating error={errors.rating} rating={value} isEditable setRating={onChange} {...field} />
					)}
				/>
			</div>
			<TextArea
				error={errors.description}
				placeholder='Текст отзыва'
				className={styles.fullWidth}
				tabIndex={isOpened ? 0 : -1}
				aria-label='Текст отзыва'
				aria-invalid={!!errors.description}
				{...register('description', { required: { value: true, message: 'And meeeeeeee' } })}
			/>
			<div className={classNames(styles.action, styles.fullWidth)}>
				<Button appearance='primary' type='submit' onClick={() => clearErrors()}>
					Отправить
				</Button>
				<span className={styles.warning}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
			</div>
			{(isSuccess || error) && (
				<div
					role='alert'
					tabIndex={0}
					className={classNames(styles.responseRes, styles.fullWidth, {
						[styles.success]: isSuccess,
						[styles.error]: error,
					})}
				>
					<P className={styles.responseResTitle}>
						{isSuccess && 'Ваш отзыв отправлен'} {error && 'Что-то пошло не так, попробуйте обновить страницу'}
					</P>
					<button title='Закрыть оповещение' onClick={() => setIsSuccess(false)} className={styles.closeIcon}></button>
				</div>
			)}
		</form>
	)
}
