import Layout from '#comp/layout'
import Link from 'next/link'

const SampleLi = props => (
  <li>
    this is Sample {props.id}
  </li>
)

export default () => {
  return (
        <Layout>
            <h1>This is Msm Next.js Sample</h1>
            <ul>
            <SampleLi id="1" />
            <SampleLi id="2" />
            <SampleLi id="3" />
            </ul>
        </Layout>
    )
};