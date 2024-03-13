import { LazyExoticComponent, lazy } from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";
import { ShoppingPage } from "../02-component-patters/pages/ShoppingPage";
import { RegisterPage } from "../03-forms/pages/RegisterPage";


type JSXComponent = () => JSX.Element;
interface Route {
    path: string;
    component: LazyExoticComponent<JSXComponent> | JSXComponent  //() => JSX.Element;
    name: string;
    children?: Route[]
}

// const LazyPage1 = lazy(/* webpackChunkName: "LazyPage1"*/() => import('../01-lazyload/pages/LazyPage1'));
// const LazyPage2 = lazy(/* webpackChunkName: "LazyPage2"*/() => import('../01-lazyload/pages/LazyPage2'));
// const LazyPage3 = lazy(/* webpackChunkName: "LazyPage3"*/() => import('../01-lazyload/pages/LazyPage3'));

export const routes: Route[] = [
    {
        path: '/',
        component: RegisterPage,
        name: 'Register'
    },
    {
        path: '/shopping',
        component: ShoppingPage,
        name: 'Shoping'
    },
    // {
    //     path: 'lazy2',
    //     component: LazyPage2,
    //     name: 'Lazy-2'
    // },
    // {
    //     path: 'lazy3',
    //     component: LazyPage3,
    //     name: 'Lazy-3'
    // },
]