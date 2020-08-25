/**
 * 
 * @author https://github.com/ymotse
 * 
 */

import React from 'react'

import {
    WebViewDetailedRepository
} from '../components/stylesDetails'


const Details = props => {
    
    const { urlDetail } = props.route.params
    
    return (
        <WebViewDetailedRepository source={{uri: urlDetail}} />
    )
}

export default Details