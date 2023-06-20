import { FeedApp } from './pages/FeedApp.jsx'

// Routes accesible from the main navigation (in AppHeader)
const routes = [
    {
        path: '/',
        component: <FeedApp />,
        label: 'Home 🏠',
    },
]

export default routes
