import { z } from 'zod';
import { DiagnosisAttachmentCreateManyInputObjectSchema } from './objects/DiagnosisAttachmentCreateManyInput.schema';

export const DiagnosisAttachmentCreateManySchema = z.object({
  data: z.union([
    DiagnosisAttachmentCreateManyInputObjectSchema,
    z.array(DiagnosisAttachmentCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
