class OrderController {
    constructor(app){
        this.app = app;
        this.create = this.create.bind(this);
    }

    /**
     * Place a new order, you must be authenticated as a customer to use this
     * @param orderItems
     * @param orderComboItems
     * @param scheduledPickupTime
     * @param note
     * @returns {Promise<any>}
     */
    create(orderItems, orderComboItems, scheduledPickupTime, note = ""){
        return new Promise((resolve, reject) => {
            let mutationString = `
                mutation addOrderMutation ($orderItems: [OrderItemInput]!, $orderComboItems: [OrderComboItemInput]!, $scheduledPickupTime: String!, $note: String!) {
                    addOrder(orderItems: $orderItems, orderComboItems: $orderComboItems, scheduledPickupTime: $scheduledPickupTime, note: $note) {
                        id
                    }
                }
            `;
            this.app.getAdaptor().mutate(mutationString, {
                orderItems, orderComboItems, scheduledPickupTime, note
            }).then(result => {
                resolve(result.addOrder.id);
            }).catch(e => {
                reject(e);
            });
        });
    }
}

module.exports = OrderController;