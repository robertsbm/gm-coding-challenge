import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default class FetchCommits extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoading: true}
    }

    componentDidMount() {
        return fetch('https://api.github.com/repos/google-research/google-research/commits')
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoading: false,
                    dataSource: responseJson,
                });

            })
            .catch((error) => {
                console.error(error);
            });
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
