import { getEmployees } from "./database.js"
import { getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li data-type="employee" data-id="${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

const employeeOrders = (id) => {
    let fulfilledOrders = 0

    for (const order of orders) {
        if (order.employeeId === id) {
            //Increment the number of fulfilled orders
            fulfilledOrders += 1
        }
    }
    //Return how many orders were fulfilled
    return fulfilledOrders
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        
        //Was an employee clicked?
        if (itemClicked.dataset.type === "employee") {
            const employeeClicked = itemClicked.dataset.id
            //Grab Employee Id
            for (const employee of employees) {
                if (parseInt(employeeClicked) === employee.id) {
                    //Grab purchases associated with employee
                    const orderCount = employeeOrders(employee.id)
                    //Window alert - "{Employee Name} has sold {number} products"
                    window.alert(`${employee.name} has sold ${orderCount} products`)
                    break
                }
            }

        }
    }
)