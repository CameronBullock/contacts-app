import React from 'react';
import { View, Text } from 'react-native';
import { Card, CardItem, Body, Spinner, Icon } from 'native-base';
import URL from './url';

class Friend extends React.Component {
  state = { friend: {} }

  componentDidMount() {
    fetch(`${URL}/${this.props.match.params.id}`)
      .then( res => res.json() )
      .then( friend => this.setState({ friend }) )
  }

  deleteFriend = () => {
    fetch(`${URL}/${this.props.match.params.id}`, {
      method: 'DELETE'
    }).then( res => { this.props.history.push('/') } )
  }

  render() {
    let { friend } = this.state;
      return (
        <View>
          { friend.first_name ?
              <Card>
                <CardItem header>
                  <Icon active name='ios-person' />
                  <Text>{`${friend.first_name} ${friend.last_name}`}</Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <Icon active name='ios-phone-portrait' />
                    <Text>{friend.phone_number}</Text>
                  </Body>
                </CardItem>
                <CardItem footer>
                  <Icon onPress={this.deleteFriend} style={{color: 'red'}} name="trash" />
                </CardItem>
              </Card> :
              <Spinner color="green" />
          }
        </View>
      )
   }
}

export default Friend;
