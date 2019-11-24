import React from 'react';
import {Text, StyleSheet, View, ActivityIndicator, FlatList, TouchableOpacity} from 'react-native';

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

    FlatListItemSeparator = () => {
        return (
            <View style={{
                height: 1,
                width: "100%",
                backgroundColor: "rgba(150,150,150,1)",
            }}
            />
        );
    }

    renderItem = (data) =>
        <TouchableOpacity style={styles.list}>
            <Text style={styles.author}>{data.item.commit.author.name}{"\n"}</Text>
            <Text style={styles.commit}>{data.item.sha}{"\n"}</Text>
            <Text style={styles.message}>{data.item.commit.message}</Text></TouchableOpacity>

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loadingView}>
                    <Text style={styles.loading}>Fetching latest commits ...</Text>
                    <ActivityIndicator/>
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataSource}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    renderItem={item => this.renderItem(item)}
                    keyExtractor={item => item.sha.toString()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        paddingVertical: 4,
        margin: 10,
    },
    author: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    commit: {
        fontSize: 14,
        fontStyle: 'italic',
    },
    message: {
        fontSize: 14,
        fontStyle: 'normal',
    },
    loading: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
    },
    loadingView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
