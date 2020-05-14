import { router, FirebaseEventRouter } from '../FirebaseEventRouter'
import { FirebaseEvent } from '../FirebaseEvents/FirebaseEvent'

let moduleExports = {}

router.setExports(moduleExports)
router.trigger("onChargeSucceeded", {})
router.trigger("onEventUpdated", {})

router.registerPubSubAction("onChargeSucceeded", "GenerateTickets", async (data, context) => {
    //Blablabla
})

router.registerHTTPRequestAction("SaveTheDay", async (req, res) => {

})

router.registerCallAction("SyncProfile", async (data, context) => {

})

router.exportRoutes()

console.log(moduleExports)