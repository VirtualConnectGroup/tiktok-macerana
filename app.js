    import { swapCameraComponent } from './camera-swap.js'

    AFRAME.registerComponent('swap-camera', swapCameraComponent)

    // Copyright (c) 2022 8th Wall, Inc.
    //
    // app.js is the main entry point for your 8th Wall app. Code here will execute after head.html
    // is loaded, and before body.html is loaded.
    // Register custom A-Frame components in app.js before the scene in body.html has loaded.
    import { tapPlaceComponent } from './tap-place'
    AFRAME.registerComponent('tap-place', tapPlaceComponent)

    // AFRAME.registerComponent('realityready', realityreadyComponent)