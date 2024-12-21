const runtimeData = (function () {

    return {

        // Basic information.
        companyName: "GameFit12",
        productName: "Supermarket",
        productVersion: "1.7.7",
        sdkVersion: "3.19.12+merge4",
        productDescription: "",

        // File references.
        buildURL: "bin",
        loaderURL: "bin/Supermarket_Web_VKontakte.loader.js",
        dataURL: "bin/Supermarket_Web_VKontakte.data.unityweb",
        frameworkURL: "bin/Supermarket_Web_VKontakte.framework.js.unityweb",
        workerURL: "",
        codeURL: "bin/Supermarket_Web_VKontakte.wasm.unityweb",
        symbolsURL: "",
        streamingURL: "streaming",

        // Visual information.
        logoType: "LOGO_TYPE",
        iconTextureName: "icon_supermarket.png",
        backgroundTextureName: "background_1280x720.png",

        // Aspect ratio.
        desktopAspectRatio: -1,
        mobileAspectRatio: -1,

        // Debug mode.
        debugMode: false,
        rotationLockType : "LandscapeOnly",

        // Prefs.
        prefsContainerTags: [ "json-data" ],

        // Platform specific scripts.
        wrapperScript: "vkontakteWrapper.js",

        // YandexGames.
        yandexGamesSDK: "/sdk.js",

        // Yandex Ads Network.
        yandexGameId: "",
        yandexBannerId: "",
        yandexInterstitialDesktopId: "",
        yandexInterstitialMobileId: "",
        yandexRewardedDesktopId: "",
        yandexRewardedMobileId: "",

        // GameDistribution.
        gameDistributionId: "",
        gameDistributionPrefix: "mirragames_",

        // CrazyGames.
        crazyGamesXSollaProjectId: "",

        // Ads by Google.
        googleAdsClient: "",
        googleAdsChannel: "",
        googleAdsTest: true,

        // GamePush.
        gamepushProjectId: "",
        gamepushToken: "",

    }

})();