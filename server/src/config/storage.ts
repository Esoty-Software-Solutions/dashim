import AWS from 'aws-sdk';


export const s3 = new AWS.S3({
  // region: 'us-east-1',
  signatureVersion: 'v4',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || 'minioadmin',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || 'minioadmin',
  },
  endpoint: process.env.AWS_ENDPOINT,
  s3ForcePathStyle: true,
})