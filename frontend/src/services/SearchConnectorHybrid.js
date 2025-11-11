import { ApiProxyConnector } from "@elastic/search-ui-elasticsearch-connector/api-proxy";
const connector = new ApiProxyConnector({
  basePath: import.meta.env.VITE_APP_ES_API+"/hybrid",
  fetchOptions: {
    credentials: "include" 
  }
});

export default connector;
