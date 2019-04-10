import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BookingButton from './common/BookingButton';

export default class App extends React.Component {
    public render() {
        return (
            <View style={styles.container}>
                <BookingButton id={3}></BookingButton>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: "center",
    },
});
