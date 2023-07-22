/* eslint-disable react/prop-types */
const PersonName = (props) => {
    return (
        <ul>
            <li>{props.title}</li>
            <li>{props.description}</li>
        </ul>
    )
}

export default PersonName