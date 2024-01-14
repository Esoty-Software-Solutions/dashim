import { z } from 'zod';
import { DiagnosesAttachmentCreateManyInputObjectSchema } from './objects/DiagnosesAttachmentCreateManyInput.schema';

export const DiagnosesAttachmentCreateManySchema = z.object({
  data: z.union([
    DiagnosesAttachmentCreateManyInputObjectSchema,
    z.array(DiagnosesAttachmentCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
