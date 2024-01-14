import { z } from 'zod';
import { prescriptionAttachmentWhereUniqueInputObjectSchema } from './objects/prescriptionAttachmentWhereUniqueInput.schema';
import { prescriptionAttachmentCreateInputObjectSchema } from './objects/prescriptionAttachmentCreateInput.schema';
import { prescriptionAttachmentUncheckedCreateInputObjectSchema } from './objects/prescriptionAttachmentUncheckedCreateInput.schema';
import { prescriptionAttachmentUpdateInputObjectSchema } from './objects/prescriptionAttachmentUpdateInput.schema';
import { prescriptionAttachmentUncheckedUpdateInputObjectSchema } from './objects/prescriptionAttachmentUncheckedUpdateInput.schema';

export const prescriptionAttachmentUpsertSchema = z.object({
  where: prescriptionAttachmentWhereUniqueInputObjectSchema,
  create: z.union([
    prescriptionAttachmentCreateInputObjectSchema,
    prescriptionAttachmentUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    prescriptionAttachmentUpdateInputObjectSchema,
    prescriptionAttachmentUncheckedUpdateInputObjectSchema,
  ]),
});
