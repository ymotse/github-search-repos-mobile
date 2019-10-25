/**
 * 
 * @author https://github.com/ymotse
 * 
 */

import React, { Fragment } from 'react'

import {
    SafeAreaView,
    StatusBar,
} from 'react-native'

import {
    ViewGeneralDetailedRepository,
    WebViewDetailedRepository
} from '../components/stylesDetails'


const Details = props => {
    
    const { navigation } = props
    
    return (
        <Fragment>
        
            <StatusBar barStyle="dark-content" />
            
            <SafeAreaView>
                
                <ViewGeneralDetailedRepository>
                    
                    <WebViewDetailedRepository source={{uri: navigation.getParam('urlDetail','https://github.com/_')}} />
                    
                </ViewGeneralDetailedRepository>
                
            </SafeAreaView>
            
        </Fragment>
    )
}

export default Details