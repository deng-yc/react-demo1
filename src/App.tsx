import * as React from 'react';
import { View, Text, StatusBar, StatusBarStyle } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { px2rem } from './styles/core';

export interface IAppProps {
    onChangeTheme: any
}

export default class App extends React.Component<IAppProps, any> {

    handleClick = () => {
        this.props.onChangeTheme();
    }

    public render() {
        return (
            <View style={styles.main}>
                <StatusBar barStyle={EStyleSheet.value("$barStyle")}></StatusBar>
                <Text style={styles.text} onPress={this.handleClick}>点击更换主题:{EStyleSheet.value("$theme")}</Text>

                <View style={styles.row}>
                    <View style={styles.left}>

                    </View>
                    <View style={styles.right}>

                    </View>
                </View>
            </View>
        );
    }
}

const styles = EStyleSheet.create({
    main: {
        flex: 1,
        width:px2rem(750),
        backgroundColor: '$backgroundColor'
    },
    text: {
        marginTop: 100,
        fontSize:px2rem(32),
        color: "$color"
    },
    row:{
        marginTop:px2rem(20),
        width:"100%",
        flexDirection: 'row'
    },
    left:{
        width:px2rem(700),
        height:px2rem(100),
        backgroundColor:'#f00'
    },
    right:{
        width:px2rem(50),
        height:px2rem(80),
        backgroundColor:'#0f0'
    }
});
