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
    encryptedAppDatabase: null,

    /**
     * holds the base url which the app will use to connect to the app server and make requests
     */
    appBaseUrl: "https://shopoakexclusive.com",

    /**
     * holds the total number of items in the local/cache user cart
     */
    cartCount: 0,

    /**
     * holds the default firebase app instance used by the application
     */
    firebaseApp: null,

    /**
     * holds the firebase ui app which is obtained from 'firebaseApp'
     */
    firebaseUI: null

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

// listen for the initialisation of the CATEGORIES page
$(document).on("init", "#categories-page", utopiasoftware[utopiasoftware_app_namespace].controller.categoriesPageViewModel.pageInit);

// listen for when the CATEGORIES page is shown
$(document).on("show", "#categories-page", utopiasoftware[utopiasoftware_app_namespace].controller.categoriesPageViewModel.pageShow);

// listen for when the CATEGORIES page is hidden
$(document).on("hide", "#categories-page", utopiasoftware[utopiasoftware_app_namespace].controller.categoriesPageViewModel.pageHide);

// listen for when the CATEGORIES page is destroyed
$(document).on("destroy", "#categories-page", utopiasoftware[utopiasoftware_app_namespace].controller.categoriesPageViewModel.pageDestroy);

// listen for the initialisation of the SEARCH page
$(document).on("init", "#search-page", utopiasoftware[utopiasoftware_app_namespace].controller.searchPageViewModel.pageInit);

// listen for when the SEARCH page is shown
$(document).on("show", "#search-page", utopiasoftware[utopiasoftware_app_namespace].controller.searchPageViewModel.pageShow);

// listen for when the SEARCH page is hidden
$(document).on("hide", "#search-page", utopiasoftware[utopiasoftware_app_namespace].controller.searchPageViewModel.pageHide);

// listen for when the SEARCH page is destroyed
$(document).on("destroy", "#search-page", utopiasoftware[utopiasoftware_app_namespace].controller.searchPageViewModel.pageDestroy);

// listen for the initialisation of the ACCOUNT page
$(document).on("init", "#account-page", utopiasoftware[utopiasoftware_app_namespace].controller.accountPageViewModel.pageInit);

// listen for when the ACCOUNT page is shown
$(document).on("show", "#account-page", utopiasoftware[utopiasoftware_app_namespace].controller.accountPageViewModel.pageShow);

// listen for when the ACCOUNT page is hidden
$(document).on("hide", "#account-page", utopiasoftware[utopiasoftware_app_namespace].controller.accountPageViewModel.pageHide);

// listen for when the ACCOUNT page is destroyed
$(document).on("destroy", "#account-page", utopiasoftware[utopiasoftware_app_namespace].controller.accountPageViewModel.pageDestroy);

// listen for the initialisation of the LOGIN page
$(document).on("init", "#login-page", utopiasoftware[utopiasoftware_app_namespace].controller.loginPageViewModel.pageInit);

// listen for when the LOGIN page is shown
$(document).on("show", "#login-page", utopiasoftware[utopiasoftware_app_namespace].controller.loginPageViewModel.pageShow);

// listen for when the LOGIN page is hidden
$(document).on("hide", "#login-page", utopiasoftware[utopiasoftware_app_namespace].controller.loginPageViewModel.pageHide);

// listen for when the LOGIN page is destroyed
$(document).on("destroy", "#login-page", utopiasoftware[utopiasoftware_app_namespace].controller.loginPageViewModel.pageDestroy);

// listen for the initialisation of the PRODUCTS page
$(document).on("init", "#products-page", utopiasoftware[utopiasoftware_app_namespace].controller.productsPageViewModel.pageInit);

// listen for when the PRODUCTS page is shown
$(document).on("show", "#products-page", utopiasoftware[utopiasoftware_app_namespace].controller.productsPageViewModel.pageShow);

// listen for when the PRODUCTS page is hidden
$(document).on("hide", "#products-page", utopiasoftware[utopiasoftware_app_namespace].controller.productsPageViewModel.pageHide);

// listen for when the PRODUCTS page is destroyed
$(document).on("destroy", "#products-page", utopiasoftware[utopiasoftware_app_namespace].controller.productsPageViewModel.pageDestroy);

// listen for the initialisation of the PRODUCT DETAILS page
$(document).on("init", "#product-details-page", utopiasoftware[utopiasoftware_app_namespace].controller.productDetailsPageViewModel.pageInit);

// listen for when the PRODUCT DETAILS page is shown
$(document).on("show", "#product-details-page", utopiasoftware[utopiasoftware_app_namespace].controller.productDetailsPageViewModel.pageShow);

// listen for when the PRODUCT DETAILS page is hidden
$(document).on("hide", "#product-details-page", utopiasoftware[utopiasoftware_app_namespace].controller.productDetailsPageViewModel.pageHide);

// listen for when the PRODUCT DETAILS page is destroyed
$(document).on("destroy", "#product-details-page", utopiasoftware[utopiasoftware_app_namespace].controller.productDetailsPageViewModel.pageDestroy);

// listen for the initialisation of the CUSTOMISE PRODUCT page
$(document).on("init", "#customise-product-page", utopiasoftware[utopiasoftware_app_namespace].controller.customiseProductPageViewModel.pageInit);

// listen for when the CUSTOMISE PRODUCT page is shown
$(document).on("show", "#customise-product-page", utopiasoftware[utopiasoftware_app_namespace].controller.customiseProductPageViewModel.pageShow);

// listen for when the CUSTOMISE PRODUCT page is hidden
$(document).on("hide", "#customise-product-page", utopiasoftware[utopiasoftware_app_namespace].controller.customiseProductPageViewModel.pageHide);

// listen for when the CUSTOMISE PRODUCT page is destroyed
$(document).on("destroy", "#customise-product-page", utopiasoftware[utopiasoftware_app_namespace].controller.customiseProductPageViewModel.pageDestroy);

// listen for the initialisation of the VIEW CART page
$(document).on("init", "#view-cart-page", utopiasoftware[utopiasoftware_app_namespace].controller.viewCartPageViewModel.pageInit);

// listen for when the VIEW CART page is shown
$(document).on("show", "#view-cart-page", utopiasoftware[utopiasoftware_app_namespace].controller.viewCartPageViewModel.pageShow);

// listen for when the VIEW CART page is hidden
$(document).on("hide", "#view-cart-page", utopiasoftware[utopiasoftware_app_namespace].controller.viewCartPageViewModel.pageHide);

// listen for when the VIEW CART is destroyed
$(document).on("destroy", "#view-cart-page", utopiasoftware[utopiasoftware_app_namespace].controller.viewCartPageViewModel.pageDestroy);

// listen for the initialisation of the PROFILE page
$(document).on("init", "#profile-page", utopiasoftware[utopiasoftware_app_namespace].controller.profilePageViewModel.pageInit);

// listen for when the PROFILE page is shown
$(document).on("show", "#profile-page", utopiasoftware[utopiasoftware_app_namespace].controller.profilePageViewModel.pageShow);

// listen for when the PROFILE page is hidden
$(document).on("hide", "#profile-page", utopiasoftware[utopiasoftware_app_namespace].controller.profilePageViewModel.pageHide);

// listen for when the PROFILE is destroyed
$(document).on("destroy", "#profile-page", utopiasoftware[utopiasoftware_app_namespace].controller.profilePageViewModel.pageDestroy);

// listen for the initialisation of the CHANGE PASSWORD page
$(document).on("init", "#change-password-page", utopiasoftware[utopiasoftware_app_namespace].controller.changePasswordPageViewModel.pageInit);

// listen for when the CHANGE PASSWORD page is shown
$(document).on("show", "#change-password-page", utopiasoftware[utopiasoftware_app_namespace].controller.changePasswordPageViewModel.pageShow);

// listen for when the CHANGE PASSWORD page is hidden
$(document).on("hide", "#change-password-page", utopiasoftware[utopiasoftware_app_namespace].controller.changePasswordPageViewModel.pageHide);

// listen for when the CHANGE PASSWORD is destroyed
$(document).on("destroy", "#change-password-page", utopiasoftware[utopiasoftware_app_namespace].controller.changePasswordPageViewModel.pageDestroy);

// listen for the initialisation of the BILLING-INFO page
$(document).on("init", "#billing-info-page", utopiasoftware[utopiasoftware_app_namespace].controller.billingInfoPageViewModel.pageInit);

// listen for when the BILLING-INFO page is shown
$(document).on("show", "#billing-info-page", utopiasoftware[utopiasoftware_app_namespace].controller.billingInfoPageViewModel.pageShow);

// listen for when the BILLING-INFO page is hidden
$(document).on("hide", "#billing-info-page", utopiasoftware[utopiasoftware_app_namespace].controller.billingInfoPageViewModel.pageHide);

// listen for when the BILLING-INFO is destroyed
$(document).on("destroy", "#billing-info-page", utopiasoftware[utopiasoftware_app_namespace].controller.billingInfoPageViewModel.pageDestroy);

// listen for the initialisation of the SHIPPING-INFO page
$(document).on("init", "#shipping-info-page", utopiasoftware[utopiasoftware_app_namespace].controller.shippingInfoPageViewModel.pageInit);

// listen for when the SHIPPING-INFO page is shown
$(document).on("show", "#shipping-info-page", utopiasoftware[utopiasoftware_app_namespace].controller.shippingInfoPageViewModel.pageShow);

// listen for when the SHIPPING-INFO page is hidden
$(document).on("hide", "#shipping-info-page", utopiasoftware[utopiasoftware_app_namespace].controller.shippingInfoPageViewModel.pageHide);

// listen for when the SHIPPING-INFO is destroyed
$(document).on("destroy", "#shipping-info-page", utopiasoftware[utopiasoftware_app_namespace].controller.shippingInfoPageViewModel.pageDestroy);

// listen for the initialisation of the CHECKOUT page
$(document).on("init", "#checkout-page", utopiasoftware[utopiasoftware_app_namespace].controller.checkoutPageViewModel.pageInit);

// listen for when the CHECKOUT page is shown
$(document).on("show", "#checkout-page", utopiasoftware[utopiasoftware_app_namespace].controller.checkoutPageViewModel.pageShow);

// listen for when the CHECKOUT page is hidden
$(document).on("hide", "#checkout-page", utopiasoftware[utopiasoftware_app_namespace].controller.checkoutPageViewModel.pageHide);

// listen for when the CHECKOUT is destroyed
$(document).on("destroy", "#checkout-page", utopiasoftware[utopiasoftware_app_namespace].controller.checkoutPageViewModel.pageDestroy);

// listen for the initialisation of the TRACK ORDER page
$(document).on("init", "#track-order-page", utopiasoftware[utopiasoftware_app_namespace].controller.trackOrderPageViewModel.pageInit);

// listen for when the TRACK ORDER page is shown
$(document).on("show", "#track-order-page", utopiasoftware[utopiasoftware_app_namespace].controller.trackOrderPageViewModel.pageShow);

// listen for when the TRACK ORDER page is hidden
$(document).on("hide", "#track-order-page", utopiasoftware[utopiasoftware_app_namespace].controller.trackOrderPageViewModel.pageHide);

// listen for when the TRACK ORDER is destroyed
$(document).on("destroy", "#track-order-page", utopiasoftware[utopiasoftware_app_namespace].controller.trackOrderPageViewModel.pageDestroy);

// listen for the initialisation of the COMPLETED ORDERS page
$(document).on("init", "#completed-orders-page", utopiasoftware[utopiasoftware_app_namespace].controller.completedOrdersPageViewModel.pageInit);

// listen for when the COMPLETED ORDERS page is shown
$(document).on("show", "#completed-orders-page", utopiasoftware[utopiasoftware_app_namespace].controller.completedOrdersPageViewModel.pageShow);

// listen for when the COMPLETED ORDERS page is hidden
$(document).on("hide", "#completed-orders-page", utopiasoftware[utopiasoftware_app_namespace].controller.completedOrdersPageViewModel.pageHide);

// listen for when the COMPLETED ORDERS is destroyed
$(document).on("destroy", "#completed-orders-page", utopiasoftware[utopiasoftware_app_namespace].controller.completedOrdersPageViewModel.pageDestroy);

// listen for the initialisation of the PENDING ORDERS page
$(document).on("init", "#pending-orders-page", utopiasoftware[utopiasoftware_app_namespace].controller.pendingOrdersPageViewModel.pageInit);

// listen for when the PENDING ORDERS page is shown
$(document).on("show", "#pending-orders-page", utopiasoftware[utopiasoftware_app_namespace].controller.pendingOrdersPageViewModel.pageShow);

// listen for when the PENDING ORDERS page is hidden
$(document).on("hide", "#pending-orders-page", utopiasoftware[utopiasoftware_app_namespace].controller.pendingOrdersPageViewModel.pageHide);

// listen for when the PENDING ORDERS is destroyed
$(document).on("destroy", "#pending-orders-page", utopiasoftware[utopiasoftware_app_namespace].controller.pendingOrdersPageViewModel.pageDestroy);

// listen for the initialisation of the ORDER DETAILS page
$(document).on("init", "#order-details-page", utopiasoftware[utopiasoftware_app_namespace].controller.orderDetailsPageViewModel.pageInit);

// listen for when the ORDER DETAILS page is shown
$(document).on("show", "#order-details-page", utopiasoftware[utopiasoftware_app_namespace].controller.orderDetailsPageViewModel.pageShow);

// listen for when the ORDER DETAILS page is hidden
$(document).on("hide", "#order-details-page", utopiasoftware[utopiasoftware_app_namespace].controller.orderDetailsPageViewModel.pageHide);

// listen for when the ORDER DETAILS is destroyed
$(document).on("destroy", "#order-details-page", utopiasoftware[utopiasoftware_app_namespace].controller.orderDetailsPageViewModel.pageDestroy);
