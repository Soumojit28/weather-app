import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text>This is Footer</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        flex:1,
        backgroundColor:'red'
    }
  });