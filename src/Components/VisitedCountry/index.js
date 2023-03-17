import {
  VisitedCountriesListItem,
  CountriesImage,
  DetailsContainer,
  Name,
  RemoveButton,
} from './styledComponents'

const VisitedCountry = props => {
  const {visitedCountryDetails, onClickRemoveButton} = props
  const {id, name, imageUrl} = visitedCountryDetails

  const onClickButton = () => {
    onClickRemoveButton(id)
  }

  return (
    <VisitedCountriesListItem>
      <CountriesImage src={imageUrl} alt="thumbnail" />
      <DetailsContainer>
        <Name>{name}</Name>
        <RemoveButton type="button" onClick={onClickButton}>
          Remove
        </RemoveButton>
      </DetailsContainer>
    </VisitedCountriesListItem>
  )
}

export default VisitedCountry
