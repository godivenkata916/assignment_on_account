import React, { useState,useEffect} from 'react';
import { SafeAreaView, Text, TouchableOpacity, Modal, View, Image,StyleSheet,TextInput,FlatList,ScrollView,} from 'react-native';
import jsonData from './assect/data.json';
import Icon from 'react-native-vector-icons/Ionicons';

const Card = ({ title, gold, silver, amount, goldweight, silverweight, totalweight }) => (
    <View style={styles.cardContainer}>
      <View style={styles.cardContent}>
      <Text style={styles.cardTitle}>{title}</Text>
      <View style={{flexDirection:"row", gap:55,marginLeft:32,}}>
        <Text style={styles.cardText}>{gold}</Text>
        <Text style={styles.cardText}>{silver}</Text>
        <Text style={styles.cardText}>{amount}</Text>
        </View>
        <View style={{flexDirection:"row", gap:15,marginLeft:12,}}>
        <Text style={{color:"#C54242",fontWeight:"bold",fontSize:13,}}>{goldweight}</Text>
        <Text style={styles.cardvalue}>{silverweight}</Text>
        <Text style={styles.cardvalue}>{totalweight}</Text>
        </View>
      </View>
    </View>
  );

const Home = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState(jsonData.data);
  const [searchQuery, setSearchQuery] = useState('');

  const handleImagePress = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filteredData = jsonData.data.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setData(filteredData);
  };

  const renderCard = ({ item }) => (
    <Card
      title={item.title}
      gold={item.gold}
      silver={item.silver}
      amount={item.amount}
      goldweight={item.goldweight}
      silverweight={item.silverweight}
      totalweight={item.totalweight}
    />
  );


  return (
    
    <SafeAreaView>
        <ScrollView>
        <View style={styles.container}>
        <Icon name="search" size={20} color="#888" style={styles.searchIcon} />
        
        <TextInput
        style={styles.searchInput}
        value={searchQuery}
        onChangeText={handleSearch}
        placeholder="     ...Search Party"
        placeholderTextColor={"#888"}
        // inlineImageLeft='search_icon'
      />
      <View style={{flexDirection:"row", gap:43,marginLeft:29,marginBottom:3,}}>
            <Text style={{padding:10, color:"#ccc",backgroundColor:"#7F90AB",borderRadius:20}}>Both</Text>
            <Text style={{padding:10, color:"#ccc",backgroundColor:"#fff",borderRadius:20,borderColor:"#ccc",borderWidth:1}}>Gold</Text>
            <Text style={{padding:10, color:"#ccc",backgroundColor:"#fff",borderRadius:20,borderColor:"#ccc",borderWidth:1}}>Silver</Text>
        </View>
      <FlatList
        data={data}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContent}
      />
        </View>
      <TouchableOpacity onPress={() => handleImagePress()} style={{bottom:100,justifyContent:'flex-end',alignItems:'flex-end',marginRight:10,...styles.shadow,}}>
        <Image source={require('./icons/flat-color-icons_plus.png')}
        style={{
                width:46,
                height:46,
                borderRadius:23,
                
            }}
         />
      </TouchableOpacity>

      <Modal visible={isModalVisible} animationType="none" transparent={true} onRequestClose={closeModal} style={{justifyContent:'flex-end',alignItems:'flex-end', marginRight:10, ...styles.shadow,width:200,height:200}}>
        <View style={{bottom:-440,width:300,height:200,backgroundColor:"#FFFFFF",marginLeft:33, borderRadius:23}}>
            <View style={{marginTop:22, marginBottom:12,marginLeft:12, flex:1,}}>
            <Image source={require('./icons/mdi_people-add.png')}
        style={{
                width:32,
                height:32,
                borderRadius:16,
                backgroundColor:'#FFF4F7FF',
                marginLeft:8
            }}
         />
         <Text style={{color:"#5A5A5A", fontSize:12, fontFamily:"R.font.sf pro", fontWeight:400, marginTop:1}}>Add Party</Text>
            </View>
        <View style={{marginTop:0, marginBottom:45,marginLeft:12, flexDirection:"row",gap:35}}>
        <Image source={require('./icons/grommet-icons_transaction.jpg')}
        style={{
                width:32,
                height:32,
                borderRadius:16,
                backgroundColor:'#FFF4F7FF',
                marginLeft:12
            }}
         />
         
         <Image source={require('./icons/game-icons_metal-bar.png')}
        style={{
                width:32,
                height:32,
                borderRadius:16,
                backgroundColor:'#FFF4F7FF',
                marginLeft:12
            }}
         />

        <Image source={require('./icons/mdi_cash.png')}
             style={{
                width:32,
                height:32,
                borderRadius:16,
                backgroundColor:'#FFF4F7FF',
                marginLeft:12
            }}
         />

<Image source={require('./icons/mdi_gold.png')}
             style={{
                width:32,
                height:32,
                borderRadius:16,
                backgroundColor:'#FFF4F7FF',
                marginLeft:12
            }}
         />
        </View>
          <View style={{flexDirection:"row",marginTop:-45, marginBottom:70,marginLeft:12 ,gap:48 }}>
            <Text style={{color:'#5A5A5A',fontSize:12,  }} >Transaction</Text>
            <Text style={{color:'#5A5A5A',fontSize:12,  }} >Metal</Text>
            <Text style={{color:'#5A5A5A',fontSize:12,  }} >Cash</Text>
            <Text style={{color:'#5A5A5A',fontSize:12,  }} >Bhavcut</Text>
          </View>
        </View>
      </Modal>

      </ScrollView>
    </SafeAreaView>
    
  );
};

const styles= StyleSheet.create({
    shadow:{
        shadowColor:"#7F5DF0",
        shadowOffset: {
            width:0,
            heigth:12,
        },
        shadowOpacity:0.25,
        shadowRadius:2.5,
        elevation:5,
    },
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#F1F2FF',
      },
      cardContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 19,
        padding: 16,
        marginBottom: 25,
        marginLeft:20,
        width:300,
        height:98,

      },
      cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color:"#4F617D",
        marginLeft:18,
      },
      cardContent: {
        // borderTopWidth: 1,

        borderTopColor: '#4F617D"',
        paddingTop: 10,
      },
      cardText: {
        fontSize: 14,
        marginBottom: 6,
        color:"#484848"
      },
      cardvalue:{
        color:"#72A701"
      },
      searchInput: {
        height: 40,
        width:300,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 13,
        padding: 10,
        marginBottom: 10,
        marginLeft:22,
        color:"#ccc",
        
        backgroundColor:'#FFFFFF',
      },
      flatListContent: {
        paddingBottom: 20,
      },
      searchIcon: {
        marginRight: 8,
        marginLeft:25,
       zIndex:23,
       position:"absolute",
       top:20,
       left:8,

      },
})

export default Home;
