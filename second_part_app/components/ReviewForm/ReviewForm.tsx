import axios from 'axios'
import classNames from 'classnames'
import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Button, Input, P, Rating, TextArea } from '..'
import { API } from '../../helpers/api'
import { IReviewForm, IReviewSendResponse } from './ReviewForm.interface'
import styles from './ReviewForm.module.css'
import { ReviewFormProps } from './ReviewForm.props'

export const ReviewForm = ({ productId }: ReviewFormProps): JSX.Element => {
	const {
		control,
		formState: { errors },
		handleSubmit,
		register,
		reset,
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
			setError(e.message)
		}
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
					rules={{ required: { value: true, message: 'Helloooo' } }}
					render={({ field: { value, onChange, ...field } }) => (
						<Rating error={errors.rating} rating={value} isEditable setRating={onChange} {...field} />
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
			{isSuccess && (
				<div className={classNames(styles.success, styles.responseRes, styles.fullWidth)}>
					<P className={styles.responseResTitle}>Ваш отзыв отправлен</P>
					<span onClick={() => setIsSuccess(false)} className={styles.closeIcon}></span>
				</div>
			)}
			{error && (
				<div className={classNames(styles.error, styles.responseRes, styles.fullWidth)}>
					<P className={styles.responseResTitle}>Что-то пошло не так, попробуйте обновить страницу</P>
					<span onClick={() => setError('')} className={styles.closeIcon}></span>
				</div>
			)}
		</form>
	)
}
