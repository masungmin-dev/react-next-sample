import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

export default function Header() {
  return (
    <div>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/sample1/sampleIndex1">
        <a style={linkStyle}>sample1</a>
      </Link>
    </div>
  )
}