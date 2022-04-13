import React from 'react';
import axios from 'axios';

const Student = () => {
    const [name, setName] = React.useState('');
    const [standard, setStandard] = React.useState('');
    const [rollNo, setRollNo] = React.useState('');

    const onSubmitHandler = async () => {
        const result = await axios.post("http://localhost:4000/student", {name, standard, rollNo});
        if(!result) alert("something went wrong!");
    }
    return (
        <form>
            <h3> Student Registration Portal </h3>
            <div className="form-group">
                <label>Enter the name of the student:</label>
                <input type="text" className="form-control" onChange={(e) => {
                    setName(e.target.value)}} />
            </div>

            <div className="form-group">
                <label>Enter the class of the student:</label>
                <input type="text" className="form-control" onChange={(e) => {
                    setStandard(e.target.value)}} />
            </div>

            <div className="form-group">
                <label>Enter the rollNo of the student:</label>
                <input type="text" className="form-control" onChange={(e) => {
                    setRollNo(e.target.value)}} />
            </div>
            <button type="submit" className="btn btn-primary" onClick={onSubmitHandler}>Save</button>
            </form>
                
    )
}

export default Student;