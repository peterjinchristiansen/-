import Mini from '../components/elements/Mini'

const Search = () => {
    const example = [
        {
            firstName: 'John',
            lastName: 'Cena',
            username: 'hackerman123',
            school: 'University of Barrack Obama',
            friends: 235,
            profilePicture: 'https://thehappypuppysite.com/wp-content/uploads/2019/09/Fluffy-Dogs-HP-long-740x400.jpg'
        }, {
            firstName: 'John',
            lastName: 'Cena',
            username: 'hackerman123',
            school: 'University of Barrack Obama',
            friends: 235,
            profilePicture: 'https://thehappypuppysite.com/wp-content/uploads/2019/09/Fluffy-Dogs-HP-long-740x400.jpg'
        }, {
            firstName: 'John',
            lastName: 'Cena',
            username: 'hackerman123',
            school: 'University of Barrack Obama',
            friends: 235,
            profilePicture: 'https://thehappypuppysite.com/wp-content/uploads/2019/09/Fluffy-Dogs-HP-long-740x400.jpg'
        }
    ]
    return(
        <div>
            {example.map(item => {
                const { firstName, lastName, username, school, friends, profilePicture } = item
                return(
                    <Mini key={username}
                        image={profilePicture}
                        text1={`${firstName} ${lastName}`}
                        text2={username}
                        text3={school}
                        text4={`${friends} friends`}
                        status={false}
                    />
                )
            })}
        </div>


    )
}

export default Search