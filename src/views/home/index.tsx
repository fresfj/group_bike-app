import React, { Fragment, useState, useEffect } from 'react';
import { 
  ScrollView,
  StatusBar,
  FlatList, 
} from "react-native";
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon, Text, Left, Right, Body  } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { onSignOut } from "../../services/auth";
import api from "../../services/auth/api";

export default ({ navigation = useNavigation() }) => {
  const [users, setUsers] = useState([])
  useEffect(()=>{
    const res = async() =>{
      try {
        const resHTTP = await api.get('/users');
        const resJson = await resHTTP.data;
        const resUser = await resJson.user;
        const resData = await resUser.data;
        console.log(resJson)
        setUsers(resData);
      } catch (err) {
        console.log(err)
      }
    }
    res();
  },[])
  
  return (
    <Container style={{ backgroundColor: "#87cefa" }}>
      <StatusBar barStyle="light-content" />
      <Header transparent>
        <Left>
          <Button
            transparent
            //onPress={() => navigation.openDrawer()}
          >
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>Group Bike</Title>
        </Body>
        <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
            <Button transparent>
              <Icon name='heart' />
            </Button>
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
      </Header>
      <Content padder>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) =>
          <Fragment>
            <Text>Nome: {item.name}</Text>
          </Fragment>}
      />
      </Content>
      <Footer>
      <FooterTab>
            <Button vertical onPress={() => navigation.navigate('Friends')}>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button vertical onPress={() => navigation.navigate('Groups')}>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button vertical active>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical onPress={() => navigation.navigate('Home')}>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
      </Footer>
    </Container>
  )
};