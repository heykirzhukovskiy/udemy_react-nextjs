import { RatingProps } from './Rating.props'
import styles from './Rating.module.css'
import classNames from 'classnames'
import StarIcon from './star.svg'
import { useEffect, useState, KeyboardEvent, forwardRef, ForwardedRef } from 'react'

export const Rating = forwardRef(
	(
		{ isEditable = false, rating, setRating, ...props }: RatingProps,
		ref: ForwardedRef<HTMLDivElement>,
	): JSX.Element => {
		const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>))
		useEffect(() => {
			constructRating(rating)
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [rating])

		const constructRating = (currRating: number) => {
			const updatedArray = ratingArray.map((_: JSX.Element, i: number) => (
				<StarIcon
					key={i + 'rateStar'}
					tabIndex={isEditable ? 0 : -1}
					onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e)}
					className={classNames(styles.star, { [styles.filled]: i < currRating, [styles.editable]: isEditable })}
					onMouseEnter={() => changeDisplay(i + 1)}
					onMouseLeave={() => changeDisplay(rating)}
					onClick={() => onClickHandler(i + 1)}
				/>
			))

			setRatingArray(updatedArray)
		}

		const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
			if (e.code !== 'Space' || !setRating) {
				return
			}

			setRating(i)
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
			<div className={styles.rating} {...props} ref={ref}>
				{ratingArray.map((r, i) => (
					<div className={styles.starWrap} key={i}>
						{r}
					</div>
				))}
			</div>
		)
	},
)
