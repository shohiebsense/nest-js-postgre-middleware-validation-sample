import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class HttpLoggerMiddleware implements NestMiddleware {
    private readonly logger = new Logger('HTTP');

    use(req: Request, res: Response, next: Function) {
        const { ip, method, originalUrl } = req;
        const userAgent = req.get('user-agent') || '';

        this.logger.log(`${method} ${originalUrl} - ${userAgent} ${ip}`);
        console.error(`${method} ${originalUrl} - ${userAgent} ${ip}`);

        const headers = req.headers;
        this.logger.log('Request headers:', headers);

        next();
    }
}