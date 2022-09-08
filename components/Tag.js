import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return <span>{text.split(' ').join('-')}</span>
}

export default Tag
