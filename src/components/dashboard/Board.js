import React from 'react';


const Board = ({data}) => {
    console.log(data);
    
    return (
    
    <>
            <tr>
                <td>{data.id}</td>
                {/* <td>{data.img}</td> */}
                <td><span>{data.sp}</span>{data.name}</td>
                <td>{data.PROGRESS}</td>
                <td>{data.STATE}</td>
                <td>{data.STARTDATE}</td>
                <td>{data.DUEDATE}</td>
                <td>{data.HARDWARE}</td>
                <td>{data.EDIT}</td>
            </tr>
         
    </>
    );
};

export default Board;