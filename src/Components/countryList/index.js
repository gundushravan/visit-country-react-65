import {
  ListItem,
  CountryName,
  VisitedButton,
  VisitedText,
} from './styledComponents'

const CountriesList = props => {
  const {countriesDetails, onClickVisitButton} = props
  const {id, name, isVisited} = countriesDetails
  const text = isVisited ? 'Visited' : 'Visit'

  const onClickButton = () => {
    onClickVisitButton(id)
  }

  return (
    <ListItem>
      <CountryName>{name}</CountryName>
      {isVisited ? (
        <VisitedText>{text}</VisitedText>
      ) : (
        <VisitedButton
          type="button"
          onClick={onClickButton}
          bgColor={isVisited}
          color={isVisited}
        >
          {text}
        </VisitedButton>
      )}
    </ListItem>
  )
}

export default CountriesList
