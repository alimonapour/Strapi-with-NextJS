import type { Block } from '@/types'

import { HeroSection } from '@/components/Blocks/HeroSection'
import { InfoBlock } from '@/components/Blocks/InfoBlock'
import { FeaturedArticle } from './Blocks/FeaturedArticle'
import { Subscribe } from './Blocks/Subscribe'
import { Heading } from '@/components/Blocks/Heading'
import { ParagraphWithImage } from '@/components/Blocks/ParagraphWithImage'
import { Paragraph } from '@/components/Blocks/Paragraph'
import { FullImage } from '@/components/Blocks/FullImage'

function blockRenderer(block: Block, index: number) {
  switch (block.__component) {
    case 'blocks.hero-section':
      return <HeroSection {...block} key={index} />
    case 'blocks.info-block':
      return <InfoBlock {...block} key={index} />
    case 'blocks.featured-article':
      return <FeaturedArticle {...block} key={index} />
    case 'blocks.subscribe':
      return <Subscribe {...block} key={index} />
    case 'blocks.heading':
      return <Heading {...block} key={index} />
    case 'blocks.paragraph-with-image':
      return <ParagraphWithImage {...block} key={index} />
    case 'blocks.paragraph':
      return <Paragraph {...block} key={index} />
    case 'blocks.full-image':
      return <FullImage {...block} key={index} />
    default:
      return null
  }
}

export function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return blocks.map((block, index) => blockRenderer(block, index))
}
