import { z } from 'zod';
import { prescriptionAttachmentCreateManyInputObjectSchema } from './objects/prescriptionAttachmentCreateManyInput.schema';

export const prescriptionAttachmentCreateManySchema = z.object({
  data: z.union([
    prescriptionAttachmentCreateManyInputObjectSchema,
    z.array(prescriptionAttachmentCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
