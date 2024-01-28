import { s3 } from "~/config/storage";


// operation values: putObject | getObject
export async function getSignedUrl(operation: string, options: any) {
  if (operation == 'getObject') {
    return await s3.getSignedUrl(operation, {
      Bucket: options.Bucket,
      Key: options.Key,
    });
  }
  return await s3.getSignedUrl(operation, {
    Bucket: options.Bucket,
    Key: options.Key,
    ContentType: options.ContentType,
    // Expires: 60 * 60 * 15
  })
}


export async function  deleteObject(options: any) {
  try {
    const res = await s3.deleteObject({
      Bucket: options.Bucket,
      Key: options.Key
    }).promise()

  } catch (error) {
    console.log(error);

  }

}

export async function  objectExists(options: any) {
  try {
    s3.waitFor('objectExists', {
      Bucket: options.Bucket,
      Key: options.Key
    }, (err:any, data:any) => err ? console.error(err) : console.info(data));
  } catch (error) {
    console.log(error);

  }

}