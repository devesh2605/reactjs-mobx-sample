import React, { Component } from 'react';
import { inject, observer } from "mobx-react";

import '../App.css';

class Controls extends Component {

    addEmployee = () => {
        const firstName = prompt("First name:")
        const lastName = prompt("Last name:")
        const salary = parseInt(prompt("The salary:"), 10)
        this.props.EmployeeStore.addEmployeeDetails({ firstName, lastName, salary })
    }

    clearList = () => {
        this.props.EmployeeStore.clearList()
    }

    render() {
        return (
            <div className="controls">
                <button style={{ backgroundColor: 'red', color: 'white' }} onClick={this.clearList}>clear table</button>
                <button style={{ backgroundColor: 'green', color: 'white' }} onClick={this.addEmployee}>add record</button>
            </div>
        );
    }
}

export default inject("EmployeeStore")(observer(Controls));