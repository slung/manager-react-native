import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { StackNavigator } from 'react-navigation';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() { 
        const config = {
            apiKey: 'AIzaSyDHVMBbBKONsE4-vWmSumaF7hW0mWzCN-s',
            authDomain: 'manager-react-native-73804.firebaseapp.com',
            databaseURL: 'https://manager-react-native-73804.firebaseio.com',
            projectId: 'manager-react-native-73804',
            storageBucket: '',
            messagingSenderId: '1066578503927'
        };

        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        
        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;