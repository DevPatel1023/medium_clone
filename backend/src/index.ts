import { Hono } from 'hono'
import { mainRoute } from './routes/mainRoutes'

const app = new Hono()

// route
app.route('api/v1',mainRoute)

export default app
