require('dotenv').config()
import express, {Express, Request, Response} from 'express'
import {sequelize} from './db'
import './models/models'

const PORT = process.env.PORT || 8000
const cors = require('cors')

const app: Express = express()
app.use(cors())
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
	res.status(200).json({message: 'WORKING!!!'})
})

const start = async () => {
	try {
		await sequelize.authenticate()
		await sequelize.sync()
		app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
	} catch (e) {
		console.log(e)
	}
}

app.get('/', (req: Request, res: Response) => {
	res.send('WORKING!!!');
});

start()

//