// import style from './style.module.sass'
import Link from 'next/link'
import { Section } from '../../../atoms/Section'
import { WorkList } from '../../../molecules/WorkList'
import { Artwork } from '../../../../interfaces'

export interface Props {
  slug: string | string[]
  works: Artwork[]
}

const List = ({ slug, work }) => (
  <li>
    <Link href={`/artist/${slug}/works/${work.id}`}>
      <a>
        <WorkList
          src={work.thumbnailUrl}
          title={work.title}
          material={work.paintingMethod}
        />
      </a>
    </Link>
  </li>
)

export const WorkLists: React.FC<Props> = ({ slug, works }) => (
  <Section isGray>
    <ul className="grid grid-cols-4 gap-4">
      {works.map((work) => (
        <List key={work.id} slug={slug} work={work} />
      ))}
    </ul>
  </Section>
)
