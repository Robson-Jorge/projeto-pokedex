import ImageErro from '../../assets/image/error_page_pokemon.png'
import { Link } from 'react-router-dom'
import { ErrorContainer } from './style'

export function ErrorPage() {
  return (
    <ErrorContainer>
      <img src={ImageErro} alt="Page not found"/>
      <Link to='/'>Back to Home</Link>
    </ErrorContainer>
  )
};
