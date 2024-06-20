import { NextResponse } from 'next/server';
import chalk from 'chalk';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { r2 } from '@/libs/r2';
import prisma from '@/libs/prisma';

export async function POST(request) {
  try {
    console.log(chalk.yellow('Generating an upload URL!'));

    const formData = await request.formData();
    const file = formData.get('file');
    const title = formData.get('title');
    const caption = formData.get('caption');

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }


    const filename = `${file.name}`;
    const fileType = file.type;

  
    if (!['image/png', 'image/jpeg'].includes(fileType)) {
      return NextResponse.json({ error: 'Unsupported file type' }, { status: 400 });
    }

    // Generate a signed URL for the file upload
    const signedUrl = await getSignedUrl(
      r2,
      new PutObjectCommand({
        Bucket: process.env.R2_BUCKET_NAME,
        Key: filename,
        ContentType: fileType,
      }),
    );

    console.log(chalk.green('Success generating upload URL!'));

    const fileUrl = `https://pub-61d3359e301643b69bf13e131f4a6786.r2.dev/${filename}`;

    // Save the content details in the database
    const content = await prisma.Content.create({
      data: {
        Judul: title,
        Caption: caption,
        url: fileUrl,
      },
    });

    return NextResponse.json({ url: signedUrl });
  } catch (err) {
    console.error(chalk.red('Error generating upload URL:', err));
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
