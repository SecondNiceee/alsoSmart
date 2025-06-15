import { startTokenRefreshLoop } from "../../../pages/api/authorization";

const ServerStartApp = async () => {
    await startTokenRefreshLoop();
    return null
};
export default ServerStartApp;