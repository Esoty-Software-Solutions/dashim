import { z } from 'zod';
import { PrescriptionAttachmentCreateInputObjectSchema } from './objects/PrescriptionAttachmentCreateInput.schema';
import { PrescriptionAttachmentUncheckedCreateInputObjectSchema } from './objects/PrescriptionAttachmentUncheckedCreateInput.schema';

export const PrescriptionAttachmentCreateOneSchema = z.object({
  data: z.union([
    PrescriptionAttachmentCreateInputObjectSchema,
    PrescriptionAttachmentUncheckedCreateInputObjectSchema,
  ]),
});
