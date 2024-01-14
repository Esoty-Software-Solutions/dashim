import { z } from 'zod';
import { PrescriptionAttachmentUpdateManyMutationInputObjectSchema } from './objects/PrescriptionAttachmentUpdateManyMutationInput.schema';
import { PrescriptionAttachmentWhereInputObjectSchema } from './objects/PrescriptionAttachmentWhereInput.schema';

export const PrescriptionAttachmentUpdateManySchema = z.object({
  data: PrescriptionAttachmentUpdateManyMutationInputObjectSchema,
  where: PrescriptionAttachmentWhereInputObjectSchema.optional(),
});
