import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const Contacts = [
        {
            uid:1,
            name: "Asjad Gull",
            status: "Just an extra ordinary learner",
            imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa3LbmZO-ZWm0gh3odP8wZ6fSiwYBt9Xtiwg&s"
        },
        {
            uid:2,
            name: "Hitesh Chaudhry",
            status: "Just an extra ordinary Teacher",
            imageurl: "https://avatars.githubusercontent.com/u/11613311?v=4"
        },
        {
            uid:3,
            name: "Anurag Tiwari",
            status: "I love to teach and code",
            imageurl: "https://avatars.githubusercontent.com/u/94738352?v=4"
        },
        {
            uid:4,
            name: "Sanket Singh",
            status: "Makes your Gpay Smooth",
            imageurl: "https://yt3.googleusercontent.com/_N5jc5PIUtGYG6TS1lTZPU1jWmHIPmvYA520tyvLCCHiuu_v-2RWEJDJwsvslQCteXBsb33b=s900-c-k-c0x00ffffff-no-rj"
        }
    ]
  return (
    <View>
      <Text style = {styles.headingText}>ContactList</Text>
      <ScrollView
        style = {styles.container}>
            {Contacts.map (({uid, name, status, imageurl}) => (
                    <View key={uid} style = {styles.userCards}>
                            <Image 
                            source={{
                                uri: imageurl
                            }}
                            style = {styles.userImage}
                            />
                            <View>
                            <Text style ={styles.userName}> {name}</Text>
                            <Text style = {styles.userStatus}>{status}</Text>
                            </View>
                    </View>
            ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
},
    container:{
        paddingHorizontal: 16,
        marginBottom: 4

    },
    userCards:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        padding:8,
        borderRadius: 14,
        backgroundColor: '#758283'

    },
    userImage:{
        width:60,
        height:60,
        borderRadius:60/2,
        marginRight: 16

    },
    userName:{
        fontSize: 16,
        fontWeight: '600',
        color: '#000'

    },
    userStatus:{

    }
})