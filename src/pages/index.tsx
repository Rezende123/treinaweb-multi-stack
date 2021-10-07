import type { NextPage } from 'next'
import SafeEnvironment from '../ui/components/feedback/SafeEnvironment/SafeEnvironment'
import PageTitle from '../ui/components/data-display/PageTitle/PageTitle'
import UseInformation from '../ui/components/data-display/UseInformation/UseInformation'

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        subtitle={"Aquele"}
        title={"Conheça os profissionais"} />

      <UseInformation
        name={'Felipe Rezende'}
        picture={'https://github.com/Rezende123.png'}
        rating={4}
        description={'Salvador'}
      />
      <UseInformation
        name={'Felipe Rezende'}
        picture={'https://github.com/Rezende123.png'}
        rating={4}
        description={'Salvador'}
      />
      <UseInformation
        name={'Felipe Rezende'}
        picture={'https://github.com/Rezende123.png'}
        rating={4}
        description={'Salvador'}
      />
      <UseInformation
        name={'Felipe Rezende'}
        picture={'https://github.com/Rezende123.png'}
        rating={4}
        description={'Salvador'}
      />
      <UseInformation
        name={'Felipe Rezende'}
        picture={'https://github.com/Rezende123.png'}
        rating={4}
        description={'Salvador'}
      />
    </div>
  )
}

export default Home
