/**
 * Created by UTOPIA SOFTWARE on 18/11/2018.
 */

/**
 * file provides the "base" framework/utilities required to launch the app.
 * E.g. - File creates the base namespace which the app is built on.
 * - Loads all the ES module libraries required etc
 *
 * The author uses the terms 'method' and function interchangeably; likewise the terms 'attribute' and 'property' are
 * also used interchangeably
 **/

// constant that defines the app namespace
const utopiasoftware_app_namespace = 'print_service_ecommerce';

/**
 * create the namespace and base methods and properties for the app
 * @type {{}}
 */
const utopiasoftware = {
    [utopiasoftware_app_namespace]: {

        /**
         * holds the randomisation engine used by Random.Js
         */
        randomisationEngine: Random.engines.browserCrypto,

        /**
         * holds the app authorization Base64 encoded key
         */
        accessor: "ZGV2ZWxvcGVyQHNob3BvYWtleGNsdXNpdmUuY29tOk9ha0RldmVsb3BlckAx",

        /**
         * holds the paystack authorization Base64 encoded key. This key must be decoded before use
         */
        paystackAccessor: "c2tfdGVzdF83YzkxMThiMzlhZmYzNmNlMGRlYTMyMzMzOTMwMDk1NjhlNWMyMDRl",

        /**
         * object is responsible for handling database operations for the app
         */
        databaseOperations: {

            /**
             * method loads the data from the specified app database
             *
             * @param docId {String}
             * @param database {Object}
             *
             * @returns {Promise<void>}
             */
            async loadData(docId, database){

                try{
                    // get specified data
                    return await database.get(docId);
                }
                finally{
                }
            },

            /**
             * method is used to save the data into the specified database
             *
             * @param saveData
             * @param database
             *
             * @returns {Promise<void>}
             */
            async saveData(saveData, database){

                try{
                    try{
                        // get the last _rev property that was used to save the data
                        saveData._rev =
                            (await utopiasoftware[utopiasoftware_app_namespace].databaseOperations.
                            loadData(saveData._id, database))._rev;
                    }
                    catch(err){}

                    // return the document data
                    return await database.put(saveData);
                }
                finally{
                }
            },

            /**
             * method is used to remove the data with the specified docId, from the specified database
             *
             * @param docId
             * @param database
             *
             * @returns {Promise<void>}
             */
            async removeData(docId, database){

                try{
                    // get the last _rev property that was used to save the data
                    let docRev =
                        (await utopiasoftware[utopiasoftware_app_namespace].databaseOperations.
                        loadData(docId, database))._rev;

                    // delete the data
                    return await database.remove(docId, docRev);
                }
                finally{
                }
            }

        }
    }
};