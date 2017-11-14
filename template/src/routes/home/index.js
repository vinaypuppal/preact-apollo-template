import { h } from 'preact';
import { graphql } from 'react-apollo';

import LOCATION_QUERY from '../../graphql/location.gql';
import { PageContainer } from './index.styles';

const weatherCard = data => (
  <div className="map">
    <h1>Weather for Sydney, {data.country}</h1>
    Map: <a href={data.mapLink}>Sydney, {data.country}</a>
    <p>
      {data.weather.temperature}deg ({data.weather.summary})
    </p>
  </div>
);

export default graphql(LOCATION_QUERY, { options: { variables: { place: 'sydney' } } })(props => (
  <PageContainer>{props.data.loading ? <p>Loading...</p> : weatherCard(props.data.location)}</PageContainer>
));
