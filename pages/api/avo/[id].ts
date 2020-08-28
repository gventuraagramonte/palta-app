import { NextApiRequest, NextApiResponse } from "next";
import DB from '@database'
import enablePublicAccess from '@cors'

const palta = async (req: NextApiRequest, res: NextApiResponse) => {
    try {

        await enablePublicAccess(req, res)

        const db = new DB()
        const id = req.query.id

        const avo = await db.getById(id as string)
        res.status(200).json(avo)
    } catch (e) {
        console.log(e)
        res.status(404).end()
    }




}
export default palta