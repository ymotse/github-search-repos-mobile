/**
 * 
 * @author https://github.com/ymotse
 * 
 */
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/FontAwesome'


export const ViewTitle = styled.View`
    margin: 20px 10px 10px 10px;
    align-items: center;
    padding: 0px 10px 0px 10px;`

export const TextTitle = styled.Text`
    font-size: 30px;
    font-weight: bold;`

export const ViewSearch = styled.View`
    flex-direction: row;
    margin: 0px 10px 10px 10px;`

export const SectionFormView = styled.View`
    flex: 1;
    flex-direction: row;
    height: 45px;
    padding-left: 10px;
    margin: 0px;
    align-items: center;
    border-radius: 8px;
    background-color: #ddd;`
    
export const IconSearch = styled(Icon)`
    margin-right: 10px;`
    
export const TextSearchInput = styled.TextInput` 
    width: 100%;
    font-size: 22px;
    color: #777777;
    text-decoration: none;`
    
export const ButtonSearch = styled.TouchableOpacity`
    height: 45px;
    width: 20%;
    margin: 0px 0px 0px 5px;
    background-color: #209400;
    border-radius: 8px;
    align-items: center;
    justify-content: center;`
    
export const TextButtonSearch = styled.Text`
    color: #fff;
    font-size: 25px;
    font-weight: bold;`
    
export const FlatListRepositories = styled.FlatList`
    margin: 20px 10px 10px 10px;
    padding: 5px;`
    
export const ViewLoadingData = styled.View`
    margin: 0px 10px 10px 10px;`
    
export const TextLoading = styled.Text`
    font-size: 16px;
    text-align: center;`
    
    
    
export const TouchableOpacityDetailsRepo = styled.TouchableOpacity`
    flex: 1;
    flex-direction: row;`

export const ImageProfileRepo = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;`
    
export const ViewRepositoryNameAndLogin = styled.View`
    align-items: flex-start;
    align-content: center;
    margin-left: 10px;
    width: 60%;`
    
export const TextDetailsRepositoryName = styled.Text`
    font-size: 18px;` 

export const TextDetailsLogin = styled.Text`
    font-size: 14px;
    color: #666666;`
    
export const ViewArrowToDetailsRepo = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
    align-self: center;`
    
export const IconArrowRightToDetails = styled(Icon)`
    margin-right: 10px;`
    
export const ViewDividerRepos = styled.View`
    margin: 10px 0px 10px 0px;
    background-color: #eeeeee;
    height: 1px;`
