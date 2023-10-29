import * as React from "react"
import '../styles/global.css'

export const Section = ({ title, children, className }: {
  children: any,
  title: string,
  className?: string
}) => {
  const header = title
    ? <SectionHeader text={title} /> : null

  return (
    <div className='mb-5 flex flex-col'>
      {header}
      <section className='mb-6'>
        {children}
      </section>
    </div>
  )
}

export const SectionHeader = ({ text }: {
  text: string
}) => (
  <h2 className="mb-2 font-bold text-md text-gray-550 break-after-avoid">
    {text}
  </h2>
)

export const ExternalLinkIcon = () => (
  <span className="inline-block text-gray-550 font-normal group-hover:text-gray-700 transition duration-100 ease-in"> ↗ </span>
)
export const Title = ({ children, url }: {
  children: any,
  url?: string
}) => {
  const contents = url
    ?  <a target="_blank" className='text-gray-700 hover:text-gray-400' href={url}> {children} <ExternalLinkIcon /></a>
    : <>{children}</>


  return (
    <header>
      <h3 className="text-lg font-semibold text-gray-700 leading-snugish">
        {contents}
      </h3>
    </header>
  )
}

export const Subheading = ({ text }: {
  text: string
}) => (
  <p className="text-md text-gray-650">{text}</p>
)

export const Description = ({ children }: any) => (
  <p className="mt-2.1 text-md text-gray-700 leading-normal">{children}</p>
)

export const Layout = ({ children }: any) => (
    <div className="max-w-3xl mx-auto px-5 flex flex-col">
      {children}
    </div>
)

export const Link = ({ url, text}: {
  url: string,
  text: string
}) => (
  <a target="_blank" className='text-gray-700 hover:text-gray-400 underline' href={url}>{text}</a>
)

export const Card = ({ title, titleUrl, children, className }: {
  title?: string,
  titleUrl?: string,
  className?: string,
  children: any
}) => {
  return (
    <div className={className || 'mb-6  break-inside-avoid'}>
      {!title || <Title url={titleUrl}>{title}</Title>}
      <Description>
        {children}
      </Description>
    </div>
  )
}

export const Tags = ({ tags }: {
  tags: String
}) => {
  const tagsArray = tags
    .split(',')
    .map(tag => tag.trim())

  return (
    <div className="mt-3 mb-2">
      <ul className="flex flex-wrap text-md relative -left-2">
        {tagsArray.map(tag => (
          <li className="px-2 mx-1 my-1 text-base text-gray-750 bg-gray-250">
            {tag}
          </li>
        ))}
      </ul>
    </div>
  )
}

export const EmploymentCertificate = ({ url, text }: {
  text?: string,
  url: string
}) => (
  <a target="_blank" href={url} className='block mb-1 text-gray-700 hover:text-gray-400'>{text ?? 'Employment certificate'}</a>
)

export const Quote = ({ children }: any) => (
  <div className='italic mb-1 mt-3 pl-4 border-gray-400 border-l-4'>
    {children}
  </div>
)

export const FlexRow = ({ children }: any) => (
  <div className='flex flex-row'>
    {children}
  </div>
)

export const FlexContainer = ({ children }: any) => (
  <div className='flex-1'>
    {children}
  </div>
)

export const AntiScrapingFieldTM = ({ text, className='' }: {
  text: string,
  className: string
}) => (
  <div className='block'>
    {text
      .split('')
      .map(char =>
        <><span className={className}>{char}</span><span className='invisible hidden'>I like turtles</span></>
      )
    }
  </div>
)

export const Contact = ({ lines, textStyles }: {
  lines: string,
  textStyles: string
}) => (
  <div>
  {lines
    .split('|')
    .map(line => line.trim())
    .map(line => <AntiScrapingFieldTM text={line} className={textStyles} />)}
  </div>
)
