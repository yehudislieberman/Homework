(function () {
    'use strict';

    const loadButton = document.getElementById('loadOrders');
    const orderDiv = document.getElementById('order');
    const fileInput = document.getElementById('fileName');

    class Item {
        constructor(name, price, quantity) {
            this.name = name;
            this.price = price;
            this.quantity = quantity;
        }
    }

    class Order {
        constructor(customer, address, items) {
            this.customer = customer;
            this.address = address;
            this.items = items || [];
        }

        getTotal() {
            let sum = 0;
            for (const item of this.items) {
                sum += item.price * item.quantity;
            }
            return sum.toFixed(2);
        }
    }

    loadButton.addEventListener('click', async function () {
        const inputName = fileInput.value;

        try {
            const response = await fetch(`${inputName}.json`);
            if (!response.ok) throw new Error('File does not exist- please request a valid file.');
            const info = await response.json();
            displayOrders(info);
        }
        catch (error) {
            console.error(error.message);
        }

    });

    function displayOrders(orders) {

        orderDiv.innerHTML = '';

        orders.forEach(order => {
            const items = order.items.map(itemData => new Item(itemData.item, itemData.total / itemData.quantity, itemData.quantity));
            const theOrder = new Order(order.customer, order.address, items);

            const orderElement = document.createElement('div');
            orderElement.innerHTML = `
            <p><hr></p>
            <p>Customer: ${theOrder.customer}</p>
            <p>Address: ${theOrder.address}</p>
            <p>Total: $${theOrder.getTotal()}</p>
            <p>Items:</p>
            `;

            theOrder.items.forEach(item => {
                orderElement.innerHTML += `
                    <p>Item: ${item.name}</p>
                    <p>Quantity: ${item.quantity}</p>
                    <p>Price: $${item.price.toFixed(2)}</p>
                `;
            });
            orderDiv.appendChild(orderElement);
        });
    }
}());