import classNames from 'classnames'
import { useRouter } from 'next/router'
import { KeyboardEventHandler, useState } from 'react'
import { Button, Input } from '..'
import styles from './Search.module.css'
import { SearchProps } from './Search.props'
import SearchIcon from './search.svg'

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
	const [search, setSearch] = useState('')
	const router = useRouter()

	const goToSearch = () => {
		router.push({
			pathname: '/search',
			query: {
				q: search,
			},
		})
	}

	const onEnterPressHandler: KeyboardEventHandler = event => {
		if (event.key === 'Enter') goToSearch()
	}

	return (
		<div className={classNames(className, styles.search)} {...props}>
			<Input
				value={search}
				placeholder='Поиск...'
				className={styles.input}
				onChange={e => setSearch(e.target.value)}
				onKeyDown={onEnterPressHandler}
			/>
			<Button className={styles.button} onClick={goToSearch} appearance='primary'>
				<SearchIcon />
			</Button>
		</div>
	)
}
