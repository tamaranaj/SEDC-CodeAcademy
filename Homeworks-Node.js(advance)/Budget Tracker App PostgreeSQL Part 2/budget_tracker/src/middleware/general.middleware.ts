import { NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";



export class GeneralMiddleware implements NestMiddleware{

    use(req: Request, res: Response, next: NextFunction) {
        console.info("General middleware")
        
        const info = {
            method: req.method,
            url: req.baseUrl,
            host: req.hostname,           
            timeOnRequest: Date.now()
        }

        console.info(info)
        next()
    }
}