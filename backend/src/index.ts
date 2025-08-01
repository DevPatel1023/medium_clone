import { Hono } from 'hono'
import { mainRoute } from './routes/mainRoutes'

const app = new Hono<{
    Bindings : {
        DATABASE_URL: string ,
        JWT_SECRET : string
    }
}>

// route
app.route('api/v1',mainRoute)

export default app
