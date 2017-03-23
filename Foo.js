import React from 'react';
import { View, Text, Image } from 'react-native';

const Foo = () => (
  <View>
    <Image
          style={{width: 400, height: 300}}
          source={{uri: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRn8kLJmtlaxj5sdzJB3_qyGomm3zjpoNcZFyITVi59bb04YwThvuNj692BIw'}}
        />
    <Text>I Pity The Foo</Text>
  </View>
)

export default Foo;
