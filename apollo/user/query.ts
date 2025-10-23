import { gql } from "@apollo/client";


/********************** 
    *   PROPERtY      *
**********************/

export const GET_PROPERTIES = gql`
    query GetProperties($input: PropertiesInquiry!) {
    getProperties(input: $input) {
        list {
            _id
            propertyType
            propertyStatus
            propertyLocation
            propertyAddress
            propertyTitle
            propertyPrice
            propertySquare
            propertyBeds
            propertyRooms
            propertyViews
            propertyLikes
            propertyComments
            propertyRank
            propertyImages
            propertyDesc
            propertyBarter
            propertyRent
            memberId
            soldAt
            deletedAt
            constructedAt
            createdAt
            updatedAt
            meLiked {
                memberId
                likeRefId
                myFavorite
            }
            memberData {
                _id
                memberType
                memberStatus
                memberAuthType
                memberPhone
                memberNick
                memberFullName
                memberImage
                memberAddress
                memberDesc
                memberProperties
                memberArticles
                memberFollowers
                memberFollowings
                memberPoints
                memberLikes
                memberViews
                memberComments
                memberRank
                memberWarnings
                memberBlocks
                deletedAt
                createdAt
                updatedAt
                accessToken
                meLiked {
                    memberId
                    likeRefId
                    myFavorite
                }
            }
        }
    }
}

`;


/********************** 
    *   AGENTS      *
**********************/