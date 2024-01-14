import { z } from 'zod';
import { PrescriptionAttachmentWhereUniqueInputObjectSchema } from './objects/PrescriptionAttachmentWhereUniqueInput.schema';
import { PrescriptionAttachmentCreateInputObjectSchema } from './objects/PrescriptionAttachmentCreateInput.schema';
import { PrescriptionAttachmentUncheckedCreateInputObjectSchema } from './objects/PrescriptionAttachmentUncheckedCreateInput.schema';
import { PrescriptionAttachmentUpdateInputObjectSchema } from './objects/PrescriptionAttachmentUpdateInput.schema';
import { PrescriptionAttachmentUncheckedUpdateInputObjectSchema } from './objects/PrescriptionAttachmentUncheckedUpdateInput.schema';

export const PrescriptionAttachmentUpsertSchema = z.object({
  where: PrescriptionAttachmentWhereUniqueInputObjectSchema,
  create: z.union([
    PrescriptionAttachmentCreateInputObjectSchema,
    PrescriptionAttachmentUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    PrescriptionAttachmentUpdateInputObjectSchema,
    PrescriptionAttachmentUncheckedUpdateInputObjectSchema,
  ]),
});
