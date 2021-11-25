import { ProductProps } from './Product.props'
import styles from './Product.module.css'
import { Button, Card, Htag, P, Review, ReviewForm, Tag } from '..'
import { Rating } from '../Rating'
import { declOfNumber, priceRU } from '../../helpers/helpers'
import Image from 'next/image'
import classNames from 'classnames'
import { useState } from 'react'

export const Product = ({
	product: {
		_id,
		advantages,
		categories,
		characteristics,
		credit,
		description,
		disAdvantages,
		image,
		initialRating,
		oldPrice,
		price,
		reviewAvg,
		reviews,
		tags,
		title,
		reviewCount,
		...props
	},
}: ProductProps): JSX.Element => {
	console.warn('Неиспользуемые пропсы в Product:', props)
	const [isReviewOpened, toggleReviewOpened] = useState<boolean>(false)
	const handleReviewOpened = () => toggleReviewOpened(preview => !preview)

	return (
		<>
			<Card className={styles.card}>
				<div className={styles.top}>
					<div className={styles.topTitle}>
						<Image
							className={styles.logo}
							width={70}
							height={70}
							src={process.env.NEXT_PUBLIC_DOMAIN + image}
							alt={title}
							layout='fixed'
						/>
						<div className={styles.titleWrap}>
							<div className={styles.title}>
								<Htag tag='h2'>{title}</Htag>
							</div>
							<div className={styles.categories}>
								{categories.map(category => (
									<Tag key={category}>{category}</Tag>
								))}
							</div>
						</div>
					</div>
					<div className={styles.topPrice}>
						<div>
							<div className={styles.price}>
								{priceRU(price)} {oldPrice && <Tag color='green'>{priceRU(price - oldPrice)}</Tag>}
							</div>
							<P>цена</P>
						</div>
						<div className={styles.credit}>
							<div>
								{priceRU(credit)}
								<span>&nbsp;/ мес</span>
							</div>
							<P>в кредит</P>
						</div>
						<div className={styles.rating}>
							<Rating rating={reviewAvg || initialRating} />
							<P>
								{reviewCount} {declOfNumber(reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
							</P>
						</div>
					</div>
				</div>
				<hr className={styles.hr} />
				<P className={styles.description}>{description}</P>
				<div className={styles.middle}>
					<div className={styles.characteristicsWrap}>
						<div className={styles.characteristics}>
							{characteristics.map(ch => (
								<div className={styles.characteristic} key={ch.name}>
									<span>{ch.name}</span>
									<hr />
									<span>{ch.value}</span>
								</div>
							))}
						</div>
						{tags.map(tag => (
							<Tag key={tag}>{tag}</Tag>
						))}
					</div>
					{advantages && (
						<div className={styles.advantages}>
							<Htag tag='h3'>Преимущества</Htag>
							{advantages}
						</div>
					)}
					{disAdvantages && (
						<div className={styles.downsides}>
							<Htag tag='h3'>Недостатки</Htag>
							{disAdvantages}
						</div>
					)}
				</div>
				<hr className={styles.hr} />
				<div className={styles.bottom}>
					<Button appearance='primary'>Узнать подробнее</Button>
					{reviews && reviews.length > 0 && (
						<Button onClick={handleReviewOpened} appearance='ghost' arrow={isReviewOpened ? 'down' : 'right'}>
							Читать отзывы
						</Button>
					)}
				</div>
			</Card>
			{reviews && reviews.length > 0 && (
				<Card className={classNames(styles.reviews, { [styles.closed]: !isReviewOpened })} color='blue'>
					{reviews.map(review => (
						<Review key={review._id} review={review} />
					))}
					<ReviewForm productId={_id} />
				</Card>
			)}
		</>
	)
}
