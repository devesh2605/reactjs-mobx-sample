import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import '../App.css';

const Row = (props) => {
    return (
        <tr>
            <td>{props.data.firstName}</td>
            <td>{props.data.lastName}</td>
            <td>{props.data.salary}</td>
        </tr>
    );
};

class Table extends Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Daily salary</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.EmployeeStore.employeesList.map((e, i) =>
                            <Row
                                key={i}
                                data={e}
                            />
                        )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>TOTAL:</td>
                            <td>{this.props.EmployeeStore.totalSum}</td>
                        </tr>
                    </tfoot>
                </table>

                <div className="fade"><u>Total: </u><u style={{ color: 'red' }}>{this.props.EmployeeStore.totalSum}</u></div>
                <div className="fade">You have <u>{this.props.EmployeeStore.highEarnersCount} team members </u>that earn more that 500$/day.</div>
            </div>
        );
    }
}

export default inject("EmployeeStore")(observer(Table));