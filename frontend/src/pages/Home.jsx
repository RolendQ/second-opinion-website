import Body from '../components/Body/Body'
import Section from '../components/Section/Section'
import Footer from '../components/Footer/Footer'
import {Suspense} from 'react';

const Home = () => {
  return (
    <div className='page'>
      <Suspense fallback="loading">
          <Body />
      </Suspense>
      <Section />
      <Footer full='true' />
    </div>
  )
}

export default Home