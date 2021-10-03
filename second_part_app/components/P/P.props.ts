import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

export interface ParagraphProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  children: ReactNode
  size?: 'L' | 'M' | 'S'
}
