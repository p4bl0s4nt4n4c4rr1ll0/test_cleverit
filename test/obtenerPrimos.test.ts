import { servidor } from '../index'
import supertest from 'supertest'

const peticionConSupertest = supertest(servidor)

describe('Testar endpoint', () => {
    it('Endpoint obtenerPrimos', async () => {
        const res = await peticionConSupertest.get("/obtenerPrimos/100")
        expect(res.status).toEqual(200)
        expect(res.type).toEqual(expect.stringContaining('json'))
    })

    it('Endpoint obtenerPrimos sin parametro', async () => {
        const res = await peticionConSupertest.get("/obtenerPrimos/")
        expect(res.status).toEqual(404)
    })
})