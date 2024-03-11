/* eslint-disable */
import { z } from 'zod';
const baseSchema = z.object({
    id: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    isPublished: z.boolean(),
    isSoftDeleted: z.boolean(),
    name: z.string(),
    link: z.string(),
    size: z.number(),
    contentType: z.string(),
    metadata: z.any(),
});
export const DiagnosisAttachmentSchema = baseSchema;
export const DiagnosisAttachmentCreateSchema = baseSchema.partial({
    createdAt: true,
    updatedAt: true,
    isPublished: true,
    isSoftDeleted: true,
});
export const DiagnosisAttachmentUpdateSchema = baseSchema.partial();
