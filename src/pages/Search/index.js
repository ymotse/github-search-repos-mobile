/**
 * 
 * @author https://github.com/ymotse
 * 
 */
import React, { useState, Fragment } from 'react'

import {
    ActivityIndicator,
    StatusBar,
    Text,
    View,
} from 'react-native'

import { 
    ButtonSearch,
    FlatListRepositories,
    IconArrowRightToDetails,
    IconSearch, 
    ImageProfileRepo, 
    SectionFormView, 
    TextButtonSearch,
    TextTitle, 
    TextDetailsLogin,
    TextDetailsRepositoryName,
    TextLoading,
    TextSearchInput, 
    TouchableOpacityDetailsRepo,
    ViewArrowToDetailsRepo, 
    ViewDividerRepos,
    ViewRepositoryNameAndLogin,
    ViewSearch,
    ViewTitle, 
    ViewLoadingData,
} from '../../components/stylesSearch'

import { useNavigation } from '@react-navigation/native'

import api from '../../services/api'


const Search = () => {
    
    const { navigate } = useNavigation()
    
    const [ repositorySearch, setRepositorySearch ] = useState('')
    
    const [ responseRepos, setResponseRepos ] = useState([])
    const [ countResponseRepos, setCountResponseRepos ] = useState('')
    const [ pageResponseRepos, setPageResponseRepos ] = useState(0)
    
    const [ loadingRepos, setLoadingRepos ] = useState(false)
    
    const LIMIT_PAGE = 100
    
    
    async function handleSearch(type) {
        
        if(repositorySearch === '' || repositorySearch === undefined) {
            return
        }
        
        if(loadingRepos) {
            return
        }
        
        
        let pageNumber = 1
        
        switch (type) {
            case 'HANDLE_FORM':
                setResponseRepos([])
                setCountResponseRepos('')
                setPageResponseRepos(pageNumber)
            break
                
            case 'HANDLE_PAGE': 
                if(responseRepos.length === countResponseRepos) {
                    return
                }
                
                pageNumber = (pageResponseRepos + 1)
            break
        }
            
        setPageResponseRepos(pageNumber)
        
        setLoadingRepos(true)
        
        const response = await api.get(`repositories?q=${repositorySearch}&sort=help-wanted-issues&order=desc&page=${pageNumber}&per_page=${LIMIT_PAGE}`, {
            "Accept" : "application/vnd.github.v3+json"
        })
        
        const { total_count, items } = response.data
        
        setLoadingRepos(false)

        switch (type) {
            case 'HANDLE_FORM':
                setResponseRepos(items)
            break
                
            case 'HANDLE_PAGE': 
                setResponseRepos([...responseRepos, ...items])
            break
        }
        
        setCountResponseRepos(total_count)
        
    }
    
    
    
    const Repository = ({ item, index }) => {
        
        return (
            <View style={{
                height: 70,
            }}>
            
                <TouchableOpacityDetailsRepo 
                    onPress={() => navigate('Details', {
                        urlDetail: item.html_url
                    })
                }
                >
                    
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ width: 40 }}>
                            {index + 1}
                        </Text>
                        
                        <ImageProfileRepo source={{uri: item.owner.avatar_url}} />
                    </View>
                    
                    <ViewRepositoryNameAndLogin>
                        <TextDetailsRepositoryName> {item.name} </TextDetailsRepositoryName>
                        <TextDetailsLogin> {item.owner.login} </TextDetailsLogin>
                    </ViewRepositoryNameAndLogin>
                    
                    <ViewArrowToDetailsRepo>
                        <IconArrowRightToDetails name="angle-right" color="#ddd" size={30} />
                    </ViewArrowToDetailsRepo>
                    
                </TouchableOpacityDetailsRepo>
                
                <ViewDividerRepos />
            </View>
        )
    }
    
    
    return (
        <>
            <StatusBar barStyle="dark-content" />
        
            <Fragment>
                <ViewTitle>
                    <TextTitle>
                        Github Search Repositories
                    </TextTitle>
                </ViewTitle>

                <ViewSearch>
                        
                    <SectionFormView>
                        <IconSearch name="search" color="#777" size={30} />
                        
                        <TextSearchInput 
                            placeholder="repository name" 
                            underlineColorAndroid="transparent" 
                            value={repositorySearch} 
                            onChangeText={e => setRepositorySearch(e)} 
                            onSubmitEditing={async () => await handleSearch('HANDLE_FORM')}
                        />
                    </SectionFormView>
                    
                    <ButtonSearch 
                        style={{ backgroundColor: ((loadingRepos || repositorySearch === '') ? '#ccc' : '#209400') }}
                        disabled={(loadingRepos || loadingRepos || repositorySearch === '') ? true : false}
                        onPress={async () => await handleSearch('HANDLE_FORM')}
                    >
                        <TextButtonSearch> 
                            Go 
                        </TextButtonSearch>
                    </ButtonSearch>
                    
                </ViewSearch>

        
                <FlatListRepositories 
                    data={responseRepos}
                    renderItem={Repository}
                    keyExtractor={(item, index) => index.toString()}
                    onEndReached={async () => handleSearch('HANDLE_PAGE')}
                    onEndReachedThreshold={0.1}
                    ListFooterComponent={<ActivityIndicator />}
                />
                
                
                <ViewLoadingData>
                {(loadingRepos) ?
                    <TextLoading>
                        Loading data. Please, wait..
                    </TextLoading>
                : 
                    <TextLoading>
                        {(responseRepos.length > 0) ? `${responseRepos.length}/${countResponseRepos}` : `` }
                    </TextLoading>
                }
                </ViewLoadingData>
            </Fragment>
        </>
    )
}


export default Search