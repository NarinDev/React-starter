import PropTypes from 'prop-types';

function Student(props: Props) {
    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "yes" : "no"}</p>
        </div>
    )
}

type Props = {
    name: PropTypes.string,
    age: number,
    isStudent: boolean,
}

export default Student
