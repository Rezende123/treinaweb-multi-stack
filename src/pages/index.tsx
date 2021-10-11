import type { NextPage } from 'next'
import SafeEnvironment from '../ui/components/feedback/SafeEnvironment/SafeEnvironment'
import PageTitle from '../ui/components/data-display/PageTitle/PageTitle'
import UseInformation from '../ui/components/data-display/UseInformation/UseInformation'
import TextFieldMask from '../ui/components/input/TextFieldMask/TextFieldMask'
import { Button, Typography } from '@mui/material'

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        subtitle={"Aquele"}
        title={"Conheça os profissionais"} />

      <TextFieldMask
        mask={'99.999-999'}
        label={'Digite seu cep'}
        fullWidth
        variant={'outlined'}/>
      <Typography color={'error'}>
        Cep inválido
      </Typography>
      <Button
        variant={'contained'}
        color={'secondary'}
        sx={{ width: '220px' }}>
          Buscar
      </Button>

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
