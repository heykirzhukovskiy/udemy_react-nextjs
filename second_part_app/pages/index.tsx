import * as React from 'react'
import { Button, Htag, P, Tag } from '../components'

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Headlines</Htag>
      <Htag tag="h1">H1</Htag>
      <Htag tag="h2">H2</Htag>
      <Htag tag="h3">H3</Htag>
      ________________________________________________________
      <Htag tag="h1">Buttons</Htag>
      <Button appearance="primary" arrow="down">
        Button
      </Button>
      <Button appearance="ghost" arrow="right">
        Button
      </Button>
      ________________________________________________________
      <Htag tag="h1">Paragraphs</Htag>
      <P size="L">I'm a large-sized version of the P</P>
      <P>I'm a medium-sized version of the P</P>
      <P size="S">I'm a small-sized version of the P</P>
      ________________________________________________________
      <Htag tag="h1">Tags</Htag>
      <Tag size="L">Large</Tag>
      <Tag>Medium</Tag>
      <Tag color="ghost">ghost</Tag>
      <Tag color="red">red</Tag>
      <Tag color="gray">gray</Tag>
      <Tag color="green">green</Tag>
      <Tag color="primary">primary</Tag>
      ________________________________________________________
    </>
  )
}
