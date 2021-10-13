import type { NextPage } from 'next'
import SafeEnvironment from '../ui/components/feedback/SafeEnvironment/SafeEnvironment'
import PageTitle from '../ui/components/data-display/PageTitle/PageTitle'
import UseInformation from '../ui/components/data-display/UseInformation/UseInformation'
import TextFieldMask from '../ui/components/input/TextFieldMask/TextFieldMask'
import { Button, Typography, Container } from '@mui/material'
import { FormElementContainer, ProfissionalsPaper, ProfissionalsContainer } from '@styles/pages/index.style'
import useIndex from '../data/hooks/pages/useIndex.page';

const Home: NextPage = () => {
  const {cep, setCep} = useIndex()

  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        subtitle={"Aquele"}
        title={"Conheça os profissionais"} />

      <Container>
        <FormElementContainer>
          <TextFieldMask
            mask={'99.999-999'}
            label={'Digite seu cep'}
            fullWidth
            value={cep}
            onChange={(e) => setCep(e.target.value)}
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
        </FormElementContainer>

        <ProfissionalsPaper>
          <ProfissionalsContainer>
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
          </ProfissionalsContainer>
        </ProfissionalsPaper>
      </Container>
    </div>
  )
}

export default Home
