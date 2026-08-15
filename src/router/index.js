import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import HardwareOverview from "../pages/HardwareOverview.vue";
import Cpu from "../pages/Cpu.vue";
import Memory from "../pages/Memory.vue";
import Storage from "../pages/Storage.vue";
import TypesOfSoftware from "../pages/TypesOfSoftware.vue";
import OperatingSystems from "../pages/OperatingSystems.vue";
import OsLayers from "../pages/OsLayers.vue";
import FileManagement from "../pages/FileManagement.vue";
import BinHex from "../pages/BinHex.vue";
import BaseConversion from "../pages/BaseConversion.vue";
import BinArithmetic from "../pages/BinArithmetic.vue";
import HexArithmetic from "../pages/HexArithmetic.vue";
import LogicSimple from "../pages/LogicSimple.vue";
import Glossary from "../pages/Glossary.vue";
import ResourceLinks from "../pages/ResourceLinks.vue";
import Test from "../pages/Test.vue";

const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/", name: "Home", component: Home, hash: "#top" },
    { path: "/hardware-overview", name: "Hardware Overview", component: HardwareOverview },
    { path: "/cpu-architecture", name: "CPU Architecture", component: Cpu },
    { path: "/memory", name: "Memory", component: Memory },
    { path: "/storage", name: "Storage", component: Storage },
    { path: "/types-of-software", name: "Types of Software", component: TypesOfSoftware },
    { path: "/operating-systems", name: "Operating Systems", component: OperatingSystems },
    { path: "/os-layers", name: "OS Layers", component: OsLayers },
    { path: "/file-management", name: "File Management", component: FileManagement },
    { path: "/number-bases", name: "Number Bases", component: BinHex },
    { path: "/base-conversion", name: "Base Conversion", component: BaseConversion },
    { path: "/binary-arithmetic", name: "Binary Arithmetic", component: BinArithmetic },
    { path: "/hex-arithmetic", name: "Hex Arithmetic", component: HexArithmetic },
    { path: "/logical-operations", name: "Logical Operations", component: LogicSimple },
    { path: "/glossary", name: "Glossary", component: Glossary },
    { path: "/links", name: "Links", component: ResourceLinks },
    { path: "/test", name: "Test", component: Test },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: "smooth", // optional: for smooth scrolling
            };
        } else if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    },
});

export default router;
