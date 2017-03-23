import React from 'react';
import {
  Text,
  Form,
  Button,
  Item,
  Label,
  Input,
  Icon,
} from 'native-base';
import URL from './url';
import { Col, Row, Grid } from 'react-native-easy-grid'

class FriendForm extends React.Component {
  state = { first_name: '', last_name: '', phone_number: '' }

  add = () => {
    let { first_name, last_name, phone_number } = this.state;
    fetch(URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: { first_name, last_name, phone_number }
      })
    })
      .then( res => res.json())
      .then( friend => this.props.addFriend(friend))
      .then( this.props.cancel )
  }

  render() {
    return (
      <Form>
        <Item stackedLabel >
          <Label>First Name</Label>
          <Input
            placeholder="Joe"
            onChangeText={ first_name => this.setState({ first_name })}
            value={this.state.first_name}
          />
        </Item>
        <Item stackedLabel>
          <Label>Last Name</Label>
          <Input
            placeholder="Somebody"
            onChangeText={ last_name => this.setState({ last_name })}
            value={this.state.last_name}
          />
        </Item>
        <Item stackedLabel>
          <Label>Phone Number</Label>
          <Input
            type="number"
            placeholder="(555)333-4444"
            onChangeText={ phone_number => this.setState({ phone_number })}
            value={this.state.phone_number}
          />
        </Item>
        <Grid>
          <Col>
            <Button block full onPress={this.props.cancel}>
              <Text>Cancel</Text>
            </Button>
          </Col>
          <Col>
            <Button block full success bordered onPress={this.add}>
              <Text>Save</Text>
            </Button>
          </Col>
        </Grid>
      </Form>
    )
  }
}

export default FriendForm;
