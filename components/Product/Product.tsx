import classNames from 'classnames'
import { motion } from 'framer-motion'
import { ForwardedRef, forwardRef, useRef, useState } from 'react'
import { Button, Card, Htag, P, Review, ReviewForm, Tag } from '..'
import { declOfNumber, priceRU } from '../../helpers/helpers'
import { Rating } from '../Rating'
import styles from './Product.module.css'
import { ProductProps } from './Product.props'

export const Product = motion(
	forwardRef(
		(
			{
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
			}: ProductProps,
			ref: ForwardedRef<HTMLDivElement>,
		): JSX.Element => {
			const [isReviewOpened, toggleReviewOpened] = useState<boolean>(false)
			const handleReviewOpened = () => toggleReviewOpened(preview => !preview)
			const reviewRef = useRef<HTMLDivElement>(null)
			const scrollToReview = () => {
				toggleReviewOpened(true)
				reviewRef.current?.scrollIntoView({
					behavior: 'smooth',
					block: 'start',
				})
				reviewRef.current?.focus()
			}
			const variants = {
				visible: {
					opacity: 1,
					height: 'auto',
				},
				hidden: {
					opacity: 0,
					height: 0,
					overflow: 'hidden',
				},
			}

			return (
				<div ref={ref}>
					<Card className={styles.card}>
						<div className={styles.top}>
							<div className={styles.topTitle}>
								<img
									className={styles.logo}
									width={70}
									height={70}
									src={process.env.NEXT_PUBLIC_DOMAIN + image}
									alt={title}
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
								<div className={styles.rateTitle}>
									<Rating rating={reviewAvg || initialRating} />
									<P>
										<a href='#ref' onClick={scrollToReview}>
											{reviewCount} {declOfNumber(reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
										</a>
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
							<Button tabIndex={0} appearance='primary'>
								Узнать подробнее
							</Button>
							{reviews && reviews.length > 0 && (
								<Button
									tabIndex={0}
									onClick={handleReviewOpened}
									appearance='ghost'
									arrow={isReviewOpened ? 'Down' : 'Right'}
									aria-expanded={isReviewOpened}
								>
									Читать отзывы
								</Button>
							)}
						</div>
					</Card>
					<motion.div layout animate={isReviewOpened ? 'visible' : 'hidden'} initial={'hidden'} variants={variants}>
						<Card
							ref={reviewRef}
							className={classNames(styles.reviews)}
							color='blue'
							tabIndex={isReviewOpened ? 0 : -1}
						>
							{reviews && reviews.length > 0 && reviews.map(review => <Review key={review._id} review={review} />)}
							<ReviewForm productId={_id} isOpened={isReviewOpened} />
						</Card>
					</motion.div>
				</div>
			)
		},
	),
)
