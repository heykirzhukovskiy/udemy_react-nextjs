import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface IconProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
	icon: IconTypes
	size?: 'S' | 'M'
	color?: 'white' | 'black' | 'primary' | 'green'
	direction?: 'Up' | 'Down' | 'Left' | 'Right'
}

export enum IconTypes {
	arrow = 'Arrow',
	close = 'Close',
	burger = 'Burger',
	check = 'Check',
}
