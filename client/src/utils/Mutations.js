import gql from 'graphql-tag'

export const REGISTER_USER = gql`
mutation register(
    $firstName: String!,
    $lastName: String!,
    $username: String!,
    $email: String!,
    $password: String!
) {
    registerUser(
        firstName: $firstName,
        lastName: $lastName,
        username: $username,
        email: $email,
        password: $password,
    ) {
        user {
            _id
            username
        }
    }
}
`

export const LOGIN = gql`
    mutation login($username: String!, $password: String!) {
        login(
            username: $username,
            password: $password
        ) {
            token
            user {
                _id
                username
            }
        }
    }
`