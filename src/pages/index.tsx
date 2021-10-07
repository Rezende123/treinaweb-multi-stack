import type { NextPage } from 'next'
import SafeEnvironment from '../ui/components/feedback/SafeEnvironment/SafeEnvironment'
import PageTitle from '../ui/components/data-display/PageTitle/PageTitle'

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        subtitle={"Aquele"}
        title={"Conheça os profissionais"} />
    </div>
  )
}

export default Home
