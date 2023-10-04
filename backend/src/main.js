import { logger } from "./application/logging.js";
import { web } from "./application/web.js";
import cors from "cors";

web.listen(4000, () => {
    logger.info("App Start in port 4000")
});

web.use(cors());