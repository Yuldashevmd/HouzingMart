import FavouritePage from "../components/Favourite/index";
import UserProperties from "../components/Profile/userProperties";
import ProfilePage from "../page/ProfilePage";

export const user = [{
        id: 1,
        title: "My profile",
        path: "/profile",
        element: < ProfilePage / > ,
    },
    {
        id: 2,
        title: "My Properties",
        path: "/myproperties",
        element: < UserProperties / > ,
    },
    {
        id: 3,
        title: "Favourites",
        path: "/favourite",
        element: < FavouritePage / > ,
    },
];