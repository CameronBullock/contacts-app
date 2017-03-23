import React from 'react';
import { View, Text } from 'react-native';
import URL from './url';
import {
  Button,
  ListItem,
  Spinner
} from 'native-base';
import { Link } from 'react-router-native';
import { Col, Row, Grid } from 'react-native-easy-grid'
import FriendForm from './FriendForm';

class Home extends React.Component {
  state = { showForm: false, friends: [], loading: true }

  componentDidMount() {
    fetch(URL)
      .then( res => res.json() )
      .then( friends => {
        this.setState({ friends, loading: false }, () => {
      });
    });
  }

  sorted = () => {
    return this.state.friends.sort( (a, b) => {
      if (a.last_name.toLowerCase() > b.last_name.toLowerCase()) return 1;
      if (a.last_name.toLowerCase() < b.last_name.toLowerCase()) return -1;
      return 0;
    });
  }

  toggleShowForm = () => {
    this.setState({ showForm: !this.state.showForm });
  }

  addFriend = (friend) => {
    this.setState({ friends: [friend, ...this.state.friends] });
  }

  render() {
    let friends = this.sorted().map( friend => {
    return (
      <ListItem key={friend.id}>
        <Link to={`/friends/${friend.id}`}>
          <Text>{`${friend.first_name} ${friend.last_name}`}</Text>
        </Link>
      </ListItem>
    )
  });

  return (
    <View>
      { this.state.showForm ?
        <FriendForm cancel={this.toggleShowForm} addFriend={this.addFriend} /> :
        <Button block full success bordered onPress={this.toggleShowForm }>
          <Text>Add Friend</Text>
        </Button>
      }
      { this.state.loading ?
        <Spinner color="red" /> : friends
      }
      { friends }
    </View>
   )
  }
}

export default Home;
