import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import { IconProps } from '../Icon/Icon.props'

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	appearance: 'primary' | 'ghost'
}

export type ButtonIconProps = IconProps & ButtonProps
