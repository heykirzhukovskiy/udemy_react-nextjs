import { ProductProps } from './Product.props'
import styles from './Product.module.css'
import classNames from 'classnames'
import { Card } from '..'

export const Product = ({ product: { advantages, title } }: ProductProps): JSX.Element => <Card>{title}</Card>
