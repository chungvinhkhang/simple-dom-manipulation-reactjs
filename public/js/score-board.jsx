import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Board = (props) => {

    const [list, setList] = useState(props.list);
    const nameInput = React.createRef();
    const gradeInput = React.createRef();

    useEffect(() => {
        nameInput.current.focus();
    });

    function handleDeleteRecord(index, e) {
        let changedList = [...list];
        changedList.splice(index, 1)
        setList(changedList);
    }

    function handleSubmit(e) {
        let changedList = [...list];
        changedList.push({
            name: nameInput.current.value,
            grade: gradeInput.current.value
        });
        setList(changedList);
        nameInput.current.value = '';
        gradeInput.current.value = '';
        nameInput.current.focus();
        event.preventDefault();
    }

    const trs = list.map((value, index) => <tr>
        <td>{value.name}</td>
        <td>{value.grade}</td>
        <td><button type="button" onClick={(e) => handleDeleteRecord(index, e)}>X</button></td>
    </tr>);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Grade</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {trs}
                </tbody>
            </table>
            <form onSubmit={handleSubmit}>  
                <input type="text" name="name" ref={nameInput} />
                <input type="text" name="grade" ref={gradeInput}  />
                <input type="submit" value="Thêm" />
            </form>
        </div>);
};

export function init(list = []) {
    ReactDOM.render(
        <Board list={list} />,
        document.getElementById('appContainer')
      );
}