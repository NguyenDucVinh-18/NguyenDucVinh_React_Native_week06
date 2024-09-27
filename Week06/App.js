import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  Button
} from 'react-native';

const DATA = [
  {
    id: 'item01',
    title: 'Ca nấu lẩu',
    shop : 'Shop Devang',
    img : './img/khoga.png'
  },
  {
    id: 'item02',
    title: '1KG gà bơ cháy tỏi',
    shop : 'Shop LTD Food',
    img : './img/khoga.png'
  },
  {
    id: 'item03',
    title: 'Xe cần cẩu đa năng',
    shop : 'Shop đồ chơi',
    img : './img/khoga.png'
  },
  {
    id: 'item04',
    title: 'Đồ chơi dạng mô hình',
    shop : 'Shop đồ chơi',
    img : './img/khoga.png'
  },
  {
    id: 'item05',
    title: 'Lãnh đạo giản đơn',
    shop : 'Shop Minh Long Book',
    img : './img/khoga.png'
  },
  {
    id: 'item06',
    title: 'Hiểu lòng con trẻ',
    shop : 'Shop Minh Long Book',
    img : './img/khoga.png'
  },
  
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <View style={{justifyContent: 'space-between', flexDirection:"row"}}>
       <Image 
          source={require('./img/khoga.png')} 
          style={{height:80, width:80}}/>
      <View style={{ width:250}}>
        <Text style={{fontWeight:'bold', fontSize:20}}>{title.title}</Text>     
        <Text style={{fontWeight:'bold', fontSize:20, color:'#E83030'}}>{title.shop}</Text>  
      </View>   
      <Button title="Chat" color="#CA1536">
      </Button>
    </View>
  </View>
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Chat" color="#1BA9FF"> 
      </Button>
      <Text style={{fontSize:18, margin:20}}> Nếu bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại liên lạc với shop</Text>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item} />}
        keyExtractor={item => item.id}
      />
      <Button title="" color="#1BA9FF"> 
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'gray',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  
});

export default App;