import { StyleSheet, Text, View, Linking, Image , TouchableOpacity} from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite ( websiteLink: string){
        Linking.openURL(websiteLink )

    }
  return (
    <View>
      <Text style = {styles.headingText}>Blog Card</Text>
      <View style = {[styles.card, styles.elevatedCard]}>
        <View style = {styles.headerContainer}>
            <Text style = {styles.headerText}>
                Whats new in JavaScript 
            </Text>
        </View>
        <Image
        source={{
uri: 'https://miro.medium.com/v2/resize:fit:1200/1*LyZcwuLWv2FArOumCxobpA.png' 
    }}
        style = {styles.cardImage}/>
        <View  style = {styles.bodyContainer}>
            <Text numberOfLines={3}>
            JavaScript is a cross-platform, object-oriented scripting language. It is a small and lightweight language. Inside a host environment (for example, a web browser), JavaScript can be connected to the objects of its environment to provide programmatic control over them.
            </Text>
        </View>
        <View  style = {styles.footerContainer}>
            <TouchableOpacity 
            onPress={() => openWebsite('https://hashnode.com/n/javascript')}>
                <Text style = {styles.socialLinks}>
                    Read more
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => openWebsite('https://www.instagram.com/asjad_gull65/')}>
                <Text style = {styles.socialLinks}>
                    Follow me
                </Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create ({
    headerText:{
        color: '#000',
        fontSize: 15,
        fontWeight: '600',
        
},
headingText:{
    fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8


},
card:{
    width: 350,
    height:360,
    borderRadius: 6,
    marginHorizontal:16,
    marginVertical:12,

},
elevatedCard:{
    backgroundColor: '#E07C24',
    elevation:3,
    shadowOffset:{
        width:1,
        height:1,
    },
    shadowColor:'#333',
    shadowOpacity:0.4
},
headerContainer:{
    height:40,
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',

},
cardImage:{
height: 190
},
bodyContainer:{
    padding:8

},
footerContainer:{
    padding:8,
    flexDirection:'row',
    justifyContent: 'space-evenly'

},
socialLinks:{
    fontSize:16,
    backgroundColor:'#FFF',
    color: '#000000',
    paddingHorizontal: 20,
    paddingVertical:6,
    borderRadius:6

}

})

