import {useState} from 'react'

const Form = ({handleSubmit}) => {

    const [filter, setFilter] = useState('')

    return (
        <form onSubmit={handleSubmit(filter)}>
            <input placeholder='Search' value={filter} onChange={event => setFilter(event.target.value)}></input>
            <button>Submit</button>
        </form>
    )
}

export default Form