import express from 'express'

export const debugLogger = function (req: express.Request, res: express.Response, next: express.NextFunction) {
    console.log('\x1b[32mINCOMING REQUEST ------------------------------\x1b[0m')
    console.log('\x1b[32mREQUEST URL: \x1b[0m', req.url)
    console.log('\x1b[32mREQUEST BODY: \x1b[0m', req.body)
    console.log('\x1b[32m-----------------------------------------------\x1b[0m')
    next()
}
