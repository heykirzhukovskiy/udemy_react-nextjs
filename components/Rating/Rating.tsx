import { RatingProps } from './Rating.props'
import styles from './Rating.module.css'
import classNames from 'classnames'
import StarIcon from './star.svg'
import { useEffect, useState, KeyboardEvent, forwardRef, ForwardedRef } from 'react'

export const Rating = forwardRef(
	(
		{ isEditable = false, rating, setRating, error, tabIndex, ...props }: RatingProps,
		ref: ForwardedRef<HTMLDivElement>,
	): JSX.Element => {
		const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))

		useEffect(() => {
			constructRating(rating)
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [rating, tabIndex])

		const computeFocus = (r: number, i: number): number => {
			if (!isEditable) {
				return -1
			}

			if ((!rating && i === 0) || r === i + 1) {
				return tabIndex ?? 0
			}

			return -1
		}

		const constructRating = (currRating: number) => {
			const updatedArray = ratingArray.map((r: JSX.Element, i: number) => (
				<StarIcon
					key={i + 'rateStar'}
					tabIndex={computeFocus(rating, i)}
					onKeyDown={handleKey}
					className={classNames(styles.star, {
						[styles.filled]: i < currRating,
						[styles.editable]: isEditable,
						[styles.error]: !!error,
					})}
					role={isEditable ? 'slider' : ''}
					aria-valuemin={1}
					aria-valuemax={5}
					aria-valuenow={rating}
					onMouseEnter={() => changeDisplay(i + 1)}
					onMouseLeave={() => changeDisplay(rating)}
					onClick={() => onClickHandler(i + 1)}
				/>
			))

			setRatingArray(updatedArray)
		}

		const handleKey = (e: KeyboardEvent<SVGElement>) => {
			if (!isEditable || !setRating) {
				return
			}

			if (e.code === 'ArrowRight' || e.code === 'ArrowUp') {
				if (!rating) {
					setRating(1)
				} else {
					e.preventDefault()
					setRating(rating < 5 ? rating + 1 : rating)
				}
			}

			if (e.code === 'ArrowLeft' || e.code === 'ArrowDown') {
				e.preventDefault()
				setRating(rating > 1 ? rating - 1 : rating)
			}
		}

		const onClickHandler = (i: number) => {
			if (!isEditable || !setRating) {
				return
			}

			setRating(i)
		}

		const changeDisplay = (i: number) => {
			if (!isEditable) {
				return
			}

			constructRating(i)
		}

		return (
			<div className={styles.rating} ref={ref} {...props}>
				{ratingArray.map((r, i) => (
					<div className={styles.starWrap} key={i}>
						{r}
					</div>
				))}
				{error && <span className={styles.errorMessage}>{error.message}</span>}
			</div>
		)
	},
)
