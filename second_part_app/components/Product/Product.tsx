import { ProductProps } from './Product.props'
import styles from './Product.module.css'
import classNames from 'classnames'
import { Button, Card, Htag, P, Tag } from '..'
import { Rating } from '../Rating'
import { declOfNumber, priceRU } from '../../helpers/helpers'

export const Product = ({
	product: {
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
	console.log(props)
	return (
		<Card className={styles.card}>
			<div className={styles.top}>
				<div className={styles.leftTop}>
					<img className={styles.logo} src={process.env.NEXT_PUBLIC_DOMAIN + image} alt={title} />
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
				<div className={styles.rightTop}>
					<div>
						<div className={styles.price}>
							{priceRU(price)} {oldPrice && <Tag color='green'>{priceRU(price - oldPrice)}</Tag>}
						</div>
						<P>цена</P>
					</div>
					<div className={styles.credit}>
						{priceRU(credit)}
						<span>&nbsp;/ мес</span>
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
				<Button appearance='ghost' arrow='right'>
					Читать отзывы
				</Button>
			</div>
		</Card>
	)
}
