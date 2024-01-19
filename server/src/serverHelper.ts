import express from 'express'

export const debugLogger = function (req: express.Request, res: express.Response, next: express.NextFunction) {
    console.log('INCOMING REQUEST ------------------------------')
    console.log('REQUEST URL:')
    console.log(req.baseUrl)
    console.log('REQUEST BODY:')
    console.log(req.body)
    console.log('REQUEST QUERY:')
    console.log(req.query)
    console.log('-----------------------------------------------')
    next()
}
