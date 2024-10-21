import Home from '../pages/Home'
import ErrorNotFound from '../pages/ErrorNotFound'
import About from '../pages/About'
import ChooseUs from '../pages/ChooseUs'
import Clients from '../pages/Clients'
import Contact from '../pages/Contact'
import Galery from '../pages/Galery'
import Services from '../pages/Services'
import { Children } from 'react'



export let routes = [
    {
        path: '/',
        element: <Home />,
        errorElement: <ErrorNotFound />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/services',
        element: <Services />
    },
    {
        path: '/chooseUs',
        element: <ChooseUs />
    },
    {
        path: '/galery',
        element: <Galery />

    },
    {

        path: '/clients',
        element: <Clients />

    },
    {
        path: '/contact',
        element: <Contact />
    }]