import { Description, Illustration, Logo, Title, Wrapper } from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'Typescript, ReactJs, NextJs e Styled components'
}) => (
  <Wrapper>
    <Logo src="/img/logo.svg" alt="Logo React Avançado" />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código "
    />
  </Wrapper>
)

export default Main
