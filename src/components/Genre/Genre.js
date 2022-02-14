import "./Genre.css"

const Genre = ({genre}) => {
    const {name} = genre;

    return (
        <div className={'genre'}>
            <ul>
                <li>{name}</li>
            </ul>
        </div>
    )
}

export default Genre;