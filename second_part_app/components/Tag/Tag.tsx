import { TagProps } from './Tag.props'
import styles from './Tag.module.css'
import cn from 'classnames'

export const Tag = ({ size = 'M', color = 'ghost', href, children, className, ...props }: TagProps): JSX.Element => (
  <p
    className={cn(styles.tag, styles[color], className, {
      [styles.l]: size === 'L',
      [styles.m]: size === 'M',
    })}
    {...props}
  >
    {href ? (
      <a target="_blank" href={href}>
        {children}
      </a>
    ) : (
      children
    )}
  </p>
)
