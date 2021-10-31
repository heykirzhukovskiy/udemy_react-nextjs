import React, { useState } from 'react'
import { Button, Htag, P, Tag } from '../components'
import { Rating } from '../components/Rating'

export default function Home(): JSX.Element {
	const [rating, setRating] = useState<number>(4)
	return (
		<>
			<Htag tag='h1'>Headlines</Htag>
			<Htag tag='h1'>H1</Htag>
			<Htag tag='h2'>H2</Htag>
			<Htag tag='h3'>H3</Htag>
			<hr />
			<Htag tag='h1'>Buttons</Htag>
			<Button appearance='primary' arrow='down'>
				Button
			</Button>
			<Button appearance='ghost' arrow='right'>
				Button
			</Button>
			<hr />
			<Htag tag='h1'>Paragraphs</Htag>
			<P size='L'>I'm a large-sized version of the P</P>
			<P>I'm a medium-sized version of the P</P>
			<P size='S'>I'm a small-sized version of the P</P>
			<hr />
			<Htag tag='h1'>Tags</Htag>
			<Tag size='L'>Large</Tag>
			<Tag>Medium</Tag>
			<Tag color='ghost'>ghost</Tag>
			<Tag color='red'>red</Tag>
			<Tag color='gray'>gray</Tag>
			<Tag color='green'>green</Tag>
			<Tag color='primary'>primary</Tag>
			<hr />
			<Htag tag='h1'>Rating</Htag>
			<Rating rating={rating} setRating={setRating} isEditable />
		</>
	)
}
