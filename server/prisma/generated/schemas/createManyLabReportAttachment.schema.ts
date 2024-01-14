import { z } from 'zod';
import { LabReportAttachmentCreateManyInputObjectSchema } from './objects/LabReportAttachmentCreateManyInput.schema';

export const LabReportAttachmentCreateManySchema = z.object({
  data: z.union([
    LabReportAttachmentCreateManyInputObjectSchema,
    z.array(LabReportAttachmentCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
