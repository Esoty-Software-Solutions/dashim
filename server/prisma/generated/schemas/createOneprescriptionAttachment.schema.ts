import { z } from 'zod';
import { prescriptionAttachmentCreateInputObjectSchema } from './objects/prescriptionAttachmentCreateInput.schema';
import { prescriptionAttachmentUncheckedCreateInputObjectSchema } from './objects/prescriptionAttachmentUncheckedCreateInput.schema';

export const prescriptionAttachmentCreateOneSchema = z.object({
  data: z.union([
    prescriptionAttachmentCreateInputObjectSchema,
    prescriptionAttachmentUncheckedCreateInputObjectSchema,
  ]),
});
