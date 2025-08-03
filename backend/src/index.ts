import { Hono } from 'hono'
import { mainRoute } from './routes/mainRoutes'
import { auth } from './middlewares/auth'

const app = new Hono<{
    Bindings : {
        DATABASE_URL: string ,
        JWT_SECRET : string
    }
}>

// middleware
app.use('/api/v1/blog/*',auth)

// route
app.route('api/v1',mainRoute)

export default app
