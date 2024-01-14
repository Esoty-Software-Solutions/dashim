import { z } from 'zod';
import { prescriptionAttachmentUpdateInputObjectSchema } from './objects/prescriptionAttachmentUpdateInput.schema';
import { prescriptionAttachmentUncheckedUpdateInputObjectSchema } from './objects/prescriptionAttachmentUncheckedUpdateInput.schema';
import { prescriptionAttachmentWhereUniqueInputObjectSchema } from './objects/prescriptionAttachmentWhereUniqueInput.schema';

export const prescriptionAttachmentUpdateOneSchema = z.object({
  data: z.union([
    prescriptionAttachmentUpdateInputObjectSchema,
    prescriptionAttachmentUncheckedUpdateInputObjectSchema,
  ]),
  where: prescriptionAttachmentWhereUniqueInputObjectSchema,
});
