import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    TouchableOpacity,
  } from 'react-native';
//   import Icon from 'react-native-vector-icons/FontAwesome6Pro';
  
import Book from './books';
import More from  './mores'
import Home from './home';
import Boxes from './boxes';

const Tab = createBottomTabNavigator();
    
const CustomHeader = ({ name, imageSource }) => {
    return (
      <View style={styles.headerContainer}>
        <Image
          source={imageSource}
          style={styles.profileImage}
          resizeMode="cover"
        />
        <Text style={styles.profileName}>{name}</Text>
      </View>
    );
  };

const Tabs =()=>{
    return(
        <Tab.Navigator screenOptions={{
            tabBarShowLabel:false,
            tabBarStyle:{position:"absolute",
            // Top:851,
            left:5,
            right:8,
            bottom:12,
            width:350,
            height:90,
            borderRadius:5,
            ...styles.shadow,
            
        },
        }}>
            <Tab.Screen name="Home" component={Home} options={{
                headerTitle: () => (
                    <CustomHeader
                      name="Mannalal Manaklal"
                      imageSource={require('./icons/iconamoon_profile-circle-fill.png')}
                    />
                  ),
                tabBarIcon:({focused})=>(
                    <View>
                       <Image source={require('./icons/Vector.png')}
                       resizeMode='contain'
                       style={{
                        width:26,
                        height:21,
                        tintColor: focused ? '#979696': '#748c94',
                    }}
                       />
                       <Text style={{fontSize:14,color:focused ? '#979696': '#748c94'}}>Home</Text>
                    </View>
                )
            }} />
            <Tab.Screen name="Boxes" component={Boxes} options={{
                headerTitle: () => (
                    <CustomHeader
                      name="Mannalal Manaklal"
                      imageSource={require('./icons/iconamoon_profile-circle-fill.png')}
                    />
                  ),
                tabBarIcon:({focused})=>(
                    <View>
                       <Image source={require('./icons/bi_box-fill.png')}
                       resizeMode='contain'
                       style={{
                        width:27,
                        height:27,
                        tintColor: focused ? '#979696': '#748c94',
                    }}
                       />
                       <Text style={{fontSize:14,color:focused ? '#979696': '#748c94'}}>Boxes</Text>
                    </View>
                )
            }}/>
            <Tab.Screen name="Books" component={Book} options={{
                headerTitle: () => (
                    <CustomHeader
                      name="Mannalal Manaklal"
                      imageSource={require('./icons/iconamoon_profile-circle-fill.png')}
                    />
                  ),
                tabBarIcon:({focused})=>(
                    <View>
                       <Image source={require('./icons/heroicons_currency-rupee-20-solid.png')}
                       resizeMode='contain'
                       style={{
                        width:32,
                        height:32,
                        tintColor: focused ? '#979696': '#748c94',
                    }}
                       />
                       <Text style={{fontSize:14,color:focused ? '#979696': '#748c94'}}>Books</Text>
                    </View>
                )
            }}/>
            <Tab.Screen name="More" component={More} options={{
                headerTitle: () => (
                    <CustomHeader
                      name="Mannalal Manaklal"
                      imageSource={require('./icons/iconamoon_profile-circle-fill.png')}
                    />
                  ),
                tabBarIcon:({focused})=>(
                    <View>
                       <Image source={require('./icons/mingcute_more-3-fill.png')}
                       resizeMode='contain'
                       style={{
                        width:29,
                        height:29,
                        tintColor: focused ? '#979696': '#748c94',
                    }}
                       />
                       <Text style={{fontSize:14,color:focused ? '#979696': '#748c94'}}>More</Text>
                    </View>
                )
            }}/>
        </Tab.Navigator>
    )
}

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
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      profileImage: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 8,
      },
      profileName: {
        fontSize: 18,
        color: '#748c94',
      },
})

export default Tabs