import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li
        data-type="product"
        data-id="${product.id}"
        >${product.name}</li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        // Was a product item clicked?
        if (itemClicked.dataset.type === "product") {
            //Get the id of the product clicked
            const productClicked = itemClicked.dataset.id
            for (const product of products) {
                if (parseInt(productClicked) === product.id) {
                //window alert showing product name and cost
                window.alert(`${product.name} costs $${product.price}`)
                break
                }
            }
        }

    }
)