import { z } from 'zod';
import { PrescriptionAttachmentUpdateInputObjectSchema } from './objects/PrescriptionAttachmentUpdateInput.schema';
import { PrescriptionAttachmentUncheckedUpdateInputObjectSchema } from './objects/PrescriptionAttachmentUncheckedUpdateInput.schema';
import { PrescriptionAttachmentWhereUniqueInputObjectSchema } from './objects/PrescriptionAttachmentWhereUniqueInput.schema';

export const PrescriptionAttachmentUpdateOneSchema = z.object({
  data: z.union([
    PrescriptionAttachmentUpdateInputObjectSchema,
    PrescriptionAttachmentUncheckedUpdateInputObjectSchema,
  ]),
  where: PrescriptionAttachmentWhereUniqueInputObjectSchema,
});
