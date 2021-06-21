import express from 'express'

const router = express.Router()

router.route('/').get((req, res) => res.send('hello ir'))

export default router