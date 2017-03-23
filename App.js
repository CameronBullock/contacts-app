import React from 'react';
import {
  Container,
  Content,
  H1,
  Header,
  Title,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  ListItem,
  Icon,
} from 'native-base';

import { View, Text, StyleSheet } from 'react-native';
import { NativeRouter, Route, Link, Switch } from 'react-router-native';

import Home from './Home';
import Foo from './Foo';
import Friend from './Friend';


class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <Container>
          <Header>
            <Left>
              <Button transparent>
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>
              <Title>Manager</Title>
            </Body>
            <Right />
          </Header>
          <Content padder>
            <Body>
              <H1>Friends App</H1>
            </Body>
            <View>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/friends/:id" component={Friend} />
                <Route path='/foo' component={Foo} />
              </Switch>
            </View>
          </Content>
          <Footer>
            <FooterTab>
              <Link style={styles.navItem} to="/" underlayColor="white">
                <View>
                  <Icon active name='ios-home' />
                  <Text>Home</Text>
                </View>
              </Link>
            </FooterTab>
            <FooterTab>
              <Link style={styles.navItem} to="/foo" underlayColor="white">
                <View>
                  <Icon active name='ios-person' />
                  <Text>Foo</Text>
                </View>
              </Link>
            </FooterTab>
          </Footer>
        </Container>
      </NativeRouter>
    )
  }
}

const styles = StyleSheet.create({
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  }

})

export default App;
