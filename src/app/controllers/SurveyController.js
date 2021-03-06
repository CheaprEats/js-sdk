class SurveyController {
    constructor(app){
        this.app = app;
        // ADD BINDINGS BELOW
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.archive = this.archive.bind(this);
        this.delete = this.delete.bind(this);
        this.release = this.release.bind(this);
        this.createSurveyResponse = this.createSurveyResponse.bind(this);
    }

    // ADD MUTATION METHODS BELOW

    /**
     * Create a new Survey and return the ID of the created object if successful
     * @param {Object} survey - The Survey Object
     * @returns {Promise<any>}
     */
    create(survey){
        return new Promise((resolve, reject) => {
            let mutationString = `
                mutation ($survey: CreateSurveyInput!) {
                    createSurvey(survey: $survey) {
                        _id
                    }
                }
            `;
            this.app.getAdaptor().mutate(mutationString, {
                survey
            }).then(result => {
                resolve(result.createSurvey._id);
            }).catch(e => {
                reject(e);
            });
        });
    }

    /**
     * Update a Survey and return the ID of the updated object if successful
     * @param {string} id - The id of the survey to be modified
     * @param {Object} survey - The Modified Survey Object
     * @returns {Promise<any>}
     */
    update(id, survey){
        return new Promise((resolve, reject) => {
            let mutationString = `
                mutation ($id: String!, $survey: UpdateSurveyInput!) {
                    updateSurvey(id: $id, survey: $survey) {
                        _id
                    }
                }
            `;
            this.app.getAdaptor().mutate(mutationString, {
                id, survey
            }).then(result => {
                resolve(result.updateSurvey._id);
            }).catch(e => {
                reject(e);
            });
        });
    }

    /**
     * Archive a Survey
     * @param {string} id - The id of the Survey Object
     * @returns {Promise<String>} - Confirmation String
     */
    archive(id){
        return new Promise((resolve, reject) => {
            let mutationString = `
                mutation ($id: String!) {
                    archiveSurvey(id: $id)
                }
            `;
            this.app.getAdaptor().mutate(mutationString, {
                id
            }).then((result) => {
                resolve(result.archiveSurvey);
            }).catch(e => {
                reject(e);
            });
        });
    }

    /**
     * Delete a Survey
     * @param {string} id - The id of the Survey Object
     * @returns {Promise<String>} - Confirmation String
     */
    delete(id){
        return new Promise((resolve, reject) => {
            let mutationString = `
                mutation ($id: String!) {
                    deleteSurvey(id: $id)
                }
            `;
            this.app.getAdaptor().mutate(mutationString, {
                id
            }).then((result) => {
                resolve(result.deleteSurvey);
            }).catch(e => {
                reject(e);
            });
        });
    }

    /**
     * Release a Survey
     * @param {string} id - The id of the Survey Object
     * @returns {Promise<any>} - The id of the Survey object
     */
    release(id){
        return new Promise((resolve, reject) => {
            let mutationString = `
                mutation ($id: String!) {
                    releaseSurvey(id: $id) {
                        _id
                    }
                }
            `;
            this.app.getAdaptor().mutate(mutationString, {
                id
            }).then(result => {
                resolve(result.releaseSurvey._id);
            }).catch(e => {
                reject(e);
            });
        });
    }

    /**
     * Create a SurveyResponse object for a Survey object and returns the SurveyResponse ID if successful
     * @param {string} survey_id - The Survey Object ID
     * @param {Object} survey_response - The survey response object; the CreateSurveyResponseInput object
     * @returns {Promise<any>}
     */
    createSurveyResponse(survey_id, survey_response) {
        return new Promise((resolve, reject) => {
            let mutationString = `
                mutation ($survey_id: String!, $survey_response: CreateSurveyResponseInput!) {
                    createSurveyResponse(survey_id: $survey_id, survey_response: $survey_response) {
                        _id
                    }
                }
            `;
            this.app.getAdaptor().mutate(mutationString, {
                survey_id, survey_response
            }).then(result => {
                resolve(result.createSurveyResponse._id);
            }).catch(e => {
                reject(e);
            });
        });
    }

}

module.exports = SurveyController;
