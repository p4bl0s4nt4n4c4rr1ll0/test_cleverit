import express from 'express'
import dotenv from 'dotenv'
import swaggerJsDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'
import {obtenerPrimos} from './funciones'

dotenv.config()

const port = process.env.PORT || 7777
const app = express()

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Documentación test CleverIT',
            version: '1.0.0'
        }
    },
    apis: ["index.ts"]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))

/**
 * @swagger
 * /obtenerPrimos/{numero}:
 *   get:
 *     description: Obtener números primos en orden descendente
 *     summary: Endpoint para obtener números primos
 *     parameters:
 *       - name: numero
 *         in: path
 *         type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Respuesta exitosa
 *     tags:
 *     - "Por defecto"
 *      
 */
app.get('/obtenerPrimos/:numero', (req, res) => {
    const primos = obtenerPrimos(parseInt(req.params.numero))
    res.json(primos.join(", "))
})

app.listen(port, () => {
    console.log(`[Servidor] Escuchando por http://localhost:${port}`)
})

export const servidor = app