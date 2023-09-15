import { logger } from "./application/logging.js";
import { web } from "./application/web.js";

web.listen(4000, () => {
    logger.info("App Start in port 4000")
});