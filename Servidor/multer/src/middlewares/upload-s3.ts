import multer, { FileFilterCallback } from 'multer';
import { Request } from 'express';
import { S3Client } from '@aws-sdk/client-s3';
import multerS3 from 'multer-s3';

const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
    const flag = file.mimetype.endsWith('pdf');
    cb(null, flag);
}

const accessKey = process.env.S3_ACCESS_KEY;
const secretKey = process.env.S3_SECRET_KET;
const region = process.env.S3_REGION;
const bucket = process.env.S3_BUCKET_NAME;

const s3client = new S3Client({
    region: region, 
    credentials: {
        accessKeyId: accessKey || '',
        secretAccessKey: secretKey || ''
    }
})

if (!bucket) {
    throw new Error('El nombre del bucket S3 no está definido. Asegúrate de configurar la variable de entorno S3_BUCKET_NAME.');
}

const s3Storage = multerS3({
    s3: s3client,
    bucket: bucket,
    metadata: (req, file, cb) => {
        cb(null, { ...file });
    },
    acl: 'public-read',
    key: (req, file, cb) => {
        const name = new Date().getTime();
        const ext = file.originalname.split('.').pop();
        cb(null, `${name}.${ext}`);
    }
});

const uploadS3 = multer({ storage: s3Storage, fileFilter });

export default uploadS3;

