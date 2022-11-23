import ContactPage from "../page/ContactPage/ContactPage.jsx";
import HomePage from "../page/Home/index.jsx";
import PropertyWrap from "../page/PropertyPage";

export const navbar = [{
        id: 1,
        title: "Home",
        path: "/home",
        element: < HomePage / > ,
    },
    {
        id: 2,
        title: "Properties",
        path: "/properties",
        element: < PropertyWrap / > ,
    },
    {
        id: 3,
        title: "Contact",
        path: "/contact",
        element: < ContactPage / > ,
    },
];