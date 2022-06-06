import React, { Component } from 'react';
import Employee from './Employee';

class EmployeeList extends React.Component{
    render(){
        const employees = [
            {
                name: 'John',
                job: 'CEO'
            },
            {
                name: 'Jane',
                job: 'Manager'
            },
            {
                name: 'Michelle',
                job: 'Programer'
            },
            {
                name: 'Tim',
                job: 'Designer'
            },
        ];

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                            <Employee name={employee.name} job={employee.job} />
                        ))}
                   <Employee name={"Mac"} job={"CEO"} />
                   <Employee name={"Dee"} job={"CTO"} />
                   <Employee name={"Carlos"} job={"Manager"} />
                </tbody>
            </table>
        );
    }
}

export default EmployeeList;