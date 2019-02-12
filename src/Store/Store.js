import { decorate, observable, action, computed } from "mobx"

class EmployeeStore {
    employeesList = [
        { firstName: "John", lastName: "Doe", salary: 150 },
        { firstName: "Jane", lastName: "Doe", salary: 150 },
    ]

    clearList = () => {
        this.employeesList = []
    }

    addEmployeeDetails = (e) => {
        this.employeesList.push(e)
    }

    get totalSum() {
        let sum = 0
        this.employeesList.map((e) => sum = sum + e.salary)
        return sum
    }

    get highEarnersCount() {
        return this.employeesList.filter(e => e.salary > 500).length
    }
}

decorate(EmployeeStore, {
    employeesList: observable,
    clearList: action,
    addEmployeeDetails: action,
    totalSum: computed,
    highEarnersCount: computed
});

export default new EmployeeStore();