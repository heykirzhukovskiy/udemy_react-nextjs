import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode
  size?: 'L' | 'M'
  color?: 'ghost' | 'red' | 'gray' | 'green' | 'primary'
  href?: string
}
