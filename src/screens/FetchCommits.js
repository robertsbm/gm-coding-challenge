import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default class FetchCommits extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoading: true}
    }

    render() {
        return <Text style={styles.text}>Hello World!</Text>;
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});