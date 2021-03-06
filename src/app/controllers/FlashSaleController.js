/**
 * Controller related to flash sales
 */
class FlashSaleController {
    constructor(app) {
        this.app    = app;
        // ADD BINDINGS BELOW
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
    }

    // ADD MUTATION METHODS BELOW

    /**
     * Create a new flash sale
     * @param {String} vendor_id - Vendor ID
     * @param {String} type - If the flash sale is on PERCENTAGE or DOLLAR basis
     * @param {int} amount - Amount in cents to base the flash sale off of
     * @param {Object[]} items - List of items included in Flash Sale
     * @param {String} start_at - Start time for Flash Sale in ISO format
     * @param {String} end_at - End time for Flash Sale in ISO format
     * @returns {Promise<any>}
     */
    create(vendor_id, type, amount, items, start_at, end_at) {
        return new Promise((resolve, reject) => {
            let mutationString = `
                mutation($vendor_id: String!, $type: FlashSaleType!, $amount: Int!, $items: [FlashSaleItemInput]!, $start_at: String!, $end_at: String!) {
                    createFlashSale(vendor_id: $vendor_id, type: $type, amount: $amount, items:$items, start_at:$start_at, end_at:$end_at) {
                        _id
                    }
                }
            `;
            this.app.getAdaptor().mutate(mutationString, {
                vendor_id, type, amount, items, start_at, end_at
            }).then(result => {
                resolve(result.createFlashSale._id);
            }).catch(e => {
                reject(e);
            });
        });
    }

    /**
     * Update existing flash sale
     * @param {String} id - Flash Sale ID
     * @param {Object[]} items - Updated List of items for Flash Sale
     * @param {String} end_at - End time for Flash Sale in ISO format
     * @returns {Promise<any>}
     */
    update(id, items, end_at) {
        return new Promise((resolve, reject) => {
            let mutationString = `
                mutation($id: String!, $items: [FlashSaleItemInput], $end_at: String) {
                    updateFlashSale(id: $id, items:$items, end_at:$end_at) {
                        _id
                    }
                }
            `;
            this.app.getAdaptor().mutate(mutationString, {
                id, items, end_at
            }).then(result => {
                resolve(result.updateFlashSale._id);
            }).catch(e => {
                reject(e);
            });
        });
    }

}

module.exports = FlashSaleController;
