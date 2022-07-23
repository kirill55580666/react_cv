import Main from "../pages/Main/Main";
import {FC} from "react";
import Projects from "../pages/Projects";
import Contacts from "../pages/Contacts";

interface route {
    path: string;
    component: FC;
}

export const routes: route[] = [
    {path: '', component: Main},
    {path: '/projects', component: Projects},
    {path: '/contacts', component: Contacts}
]