import { z } from 'zod';
import { PrescriptionAttachmentCreateManyInputObjectSchema } from './objects/PrescriptionAttachmentCreateManyInput.schema';

export const PrescriptionAttachmentCreateManySchema = z.object({
  data: z.union([
    PrescriptionAttachmentCreateManyInputObjectSchema,
    z.array(PrescriptionAttachmentCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
