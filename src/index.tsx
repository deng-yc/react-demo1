import * as React from 'react';
import App from './App';
import EStyleSheet from 'react-native-extended-stylesheet';
import { darkTheme } from './styles/dark';
import { lightTheme } from './styles/light';
import { View } from 'react-native';
import { coreTheme } from './styles/core';

EStyleSheet.build({...coreTheme,...lightTheme});
export default class Home extends React.Component<any> {

    state={
        render:true
    }

    toogleTheme=()=>{
        const theme = EStyleSheet.value('$theme') === 'light' ? darkTheme : lightTheme;
        const styles={...coreTheme,...theme};
        EStyleSheet.build(styles);
        this.setState({render: false}, () => this.setState({render: true}));
    }

    render() {
        return this.state.render ? <App onChangeTheme={this.toogleTheme}/> : null;
    }
}