import { Request, Response, NextFunction } from "express"

const authMiddleware = (req: Request, res: Response, next: NextFunction ) => {
    const isSigned = req.signedCookies['auth'];
    if(isSigned){
        next();
    } else {
        res.sendStatus(401);
    }
}

export default authMiddleware;