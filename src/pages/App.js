/**
 * 
 * @author https://github.com/ymotse
 * 
 */

import React, { useState, Fragment } from 'react'

import api from '../services/api'

import {
    ScrollView,
    StatusBar,
    Text,
    View,
} from 'react-native'

import { 
    IconArrowRightToDetails,
    IconSearch, 
    ImageProfileRepo, 
    SafeAreaViewRepos,
    SectionFormView, 
    TextTitle, 
    TextDetailsLogin,
    TextDetailsRepositoryName,
    TextLoading,
    TextSearchInput, 
    TouchableOpacityDetailsRepo,
    ViewArrowToDetailsRepo, 
    ViewDividerRepos,
    ViewGeneralRepos, 
    ViewRepositoryNameAndLogin,
    ViewTitle, 
} from '../components/stylesApp'


const App = props => {
    
    const [ repositorySearch, setRepositorySearch ] = useState()
    const [ responseRepos, setResponseRepos ] = useState([])
    const [ loadingRepos, setLoadingRepos ] = useState(false)
    
    const { navigation } = props
    
    
    const handleSearch = async () => {
        
        if(repositorySearch !== '' && repositorySearch !== undefined) {
            setLoadingRepos(true)
            
            const response = await api.get(`repositories?q=${repositorySearch}&sort=stars&order=desc`)
            setResponseRepos(response.data.items)
            setLoadingRepos(false)
        }
    }
    
    
    const Repositories = () => {
        
        return responseRepos.map((repository, i) => (
            <Fragment key={i}>
            
                <TouchableOpacityDetailsRepo onPress={() => navigation.navigate('DetailsPage', {
                    urlDetail: repository.html_url
                })}>
                    
                    <View>
                        <ImageProfileRepo source={{uri: repository.owner.avatar_url}} />
                    </View>
                    
                    <ViewRepositoryNameAndLogin>
                        <TextDetailsRepositoryName> {repository.name} </TextDetailsRepositoryName>
                        <TextDetailsLogin> {repository.owner.login} </TextDetailsLogin>
                    </ViewRepositoryNameAndLogin>
                    
                    <ViewArrowToDetailsRepo>
                        <IconArrowRightToDetails name="angle-right" color="#ddd" size={30} />
                    </ViewArrowToDetailsRepo>
                    
                </TouchableOpacityDetailsRepo>
                
                <ViewDividerRepos />
            </Fragment>
        ))
    }

    return (
        <Fragment>
            <StatusBar barStyle="dark-content" />
            
            <SafeAreaViewRepos>

                <Fragment>
                    <ViewTitle>
                        <TextTitle> 
                            {responseRepos.length === 0 && <Text>Search Repositories</Text>}
                            {responseRepos.length > 0 && <Text>Recent ({responseRepos.length})</Text>}
                        </TextTitle>
                    </ViewTitle>

                    <SectionFormView>
                        <IconSearch name="search" color="#777" size={30} />

                        <TextSearchInput placeholder="Search Repositories" 
                            underlineColorAndroid="transparent" 
                            
                            onChangeText={e => setRepositorySearch(e)} 
                            onEndEditing={async () => handleSearch()} 
                            onBlur={async () => handleSearch()} 
                        />
                    </SectionFormView>
                </Fragment>

                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    
                    {(loadingRepos) &&
                    <TextLoading>Please, wait..</TextLoading>
                    }
                    
                    <ViewGeneralRepos>
                        <Repositories />
                    </ViewGeneralRepos>

                </ScrollView>
                
            </SafeAreaViewRepos>
        </Fragment>
    )
}


export default App
