import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style = {styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal = {true} style = {styles.container}>
        <View style = {[styles.Card, styles.CardElevated]}>
            <Text>
                Tap
            </Text>
        </View>
        <View style = {[styles.Card, styles.CardElevated]}>
            <Text>
                me
            </Text>
        </View>
        <View style = {[styles.Card, styles.CardElevated]}>
            <Text>
                to
            </Text>
        </View>
        <View style = {[styles.Card, styles.CardElevated]}>
            <Text>
                scroll
            </Text>
        </View>
        <View style = {[styles.Card, styles.CardElevated]}>
            <Text>
                more...
            </Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    Card:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius:4,
        margin:8
    },
    CardElevated:{
        backgroundColor: '#CAD5E2',
        elevation:4,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:'#333',
        shadowOpacity:0.3,
        shadowRadius:2

    },
    container:{
        padding: 8
    }
})