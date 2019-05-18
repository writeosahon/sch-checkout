/**
 * Created by UTOPIA SOFTWARE on 18/11/2018.
 */

// define the model namespace
utopiasoftware[utopiasoftware_app_namespace].model = {

    /**
     * property acts as a flag that indicates that all hybrid plugins and DOM content
     * have been successfully loaded. It relies on the ons.ready() method
     *
     * @type {boolean} flag for if the hybrid plugins and DOM content are ready for execution
     */
    isAppReady: false,

    /**
     * holds the pouchDB database used by the app
     */
    appDatabase: null,

    /**
     * holds the encrypted pouchDB database used by the app
     */
    encryptedAppDatabase: null

};

// call the method to startup the app
utopiasoftware[utopiasoftware_app_namespace].controller.startup();

// listen for the initialisation of the HOME page
$(document).on("init", "#home-page", utopiasoftware[utopiasoftware_app_namespace].controller.homePageViewModel.pageInit);

// listen for when the HOME page is shown
$(document).on("show", "#home-page", utopiasoftware[utopiasoftware_app_namespace].controller.homePageViewModel.pageShow);

// listen for when the HOME page is hidden
$(document).on("hide", "#home-page", utopiasoftware[utopiasoftware_app_namespace].controller.homePageViewModel.pageHide);

// listen for when the HOME page is destroyed
$(document).on("destroy", "#home-page", utopiasoftware[utopiasoftware_app_namespace].controller.homePageViewModel.pageDestroy);

