/* eslint-disable */
import { z } from 'zod';
const baseSchema = z.object({
    id: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    isPublished: z.boolean(),
    isSoftDeleted: z.boolean(),
});
export const LabReportAttachmentSchema = baseSchema;
export const LabReportAttachmentCreateSchema = baseSchema.partial({
    createdAt: true,
    updatedAt: true,
    isPublished: true,
    isSoftDeleted: true,
});
export const LabReportAttachmentUpdateSchema = baseSchema.partial();
