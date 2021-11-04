import { gql } from 'graphql-tag'

export const GET_USER = gql`
    {
        getUser {
            _id
            fullName
            username
            school
            friendCount
            profilePicture
            groups {
                _id
                name
                subtitle
                school
                userCount
                groupPicture
            }
            school {
                _id
                name
                state
                groupCount
                userCount
                schoolPicture
            }
        }
    }
`

export const GET_GROUP = gql`
    {
        getGroup {
            _id
            name
            subtitle
            school
            userCount
            groupPicture
            users {
                _id
                fullName
                username
                school
                friendCount
                profilePicture
            }
        }
    }
`

export const GET_SCHOOL = gql`
    {
        getSchool {
            _id
            name
            state
            groupCount
            userCount
            schoolPicture
            groups {
                _id
                name
                subtitle
                school
                userCount
                groupPicture
            }
        }
    }
`

export const GET_ALL_USERS = gql`
    {
        getAllUsers {
            _id
            fullName
            username
            school
            friendCount
            profilePicture
        }
    }
`
export const GET_ALL_SCHOOLS = gql`
    {
        getAllSchools {
            _id
            name
            state
            groupCount
            userCount
            schoolPicture
        }
    }
`

export const GET_ALL_GROUPS = gql`
    {
        getAllGroups {
            _id
            name
            subtitle
            school
            userCount
            groupPicture
        }
    }
`
