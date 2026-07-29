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
import BinDec from "../pages/BinDec.vue";
import BinHex from "../pages/BinHex.vue";
import DecHex from "../pages/DecHex.vue";
import BinAddition from "../pages/BinAddition.vue";
import BinSubtraction from "../pages/BinSubtraction.vue";
import HexAddition from "../pages/HexAddition.vue";
import HexSubtraction from "../pages/HexSubtraction.vue";
import LogicSimple from "../pages/LogicSimple.vue";
import LogicComplex from "../pages/LogicComplex.vue";
import Glossary from "../pages/Glossary.vue";
import ResourceLinks from "../pages/ResourceLinks.vue";

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
    { path: "/bin-dec", name: "Binary - Decimal", component: BinDec },
    { path: "/bin-hex", name: "Binary - Hex", component: BinHex },
    { path: "/dec-hex", name: "Decimal - Hex", component: DecHex },
    { path: "/binary-addition", name: "Binary Addition", component: BinAddition },
    { path: "/binary-subtraction", name: "Binary Subtraction", component: BinSubtraction },
    { path: "/hex-addition", name: "Hex Addition", component: HexAddition },
    { path: "/hex-subtraction", name: "Hex Subtraction", component: HexSubtraction },
    { path: "/simple-logic-gates", name: "Simple Logic Gates", component: LogicSimple },
    { path: "/complex-logic-gates", name: "Complex Logic Gates", component: LogicComplex },
    { path: "/glossary", name: "Glossary", component: Glossary },
    { path: "/links", name: "Links", component: ResourceLinks },
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
