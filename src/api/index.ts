export { getHomeDetail } from "./modules/home";
const apiModules = import.meta.glob("./modules/*", { eager: true });
let apiList = {};
for (const key in apiModules) {
    if (Object.prototype.hasOwnProperty.call(apiModules, key)) {
        apiList = Object.assign({}, apiList, apiModules[key]);
    }
}
console.log("apiList", apiList);
export default apiList;
