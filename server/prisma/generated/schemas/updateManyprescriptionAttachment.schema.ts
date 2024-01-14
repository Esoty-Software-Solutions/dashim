import { z } from 'zod';
import { prescriptionAttachmentUpdateManyMutationInputObjectSchema } from './objects/prescriptionAttachmentUpdateManyMutationInput.schema';
import { prescriptionAttachmentWhereInputObjectSchema } from './objects/prescriptionAttachmentWhereInput.schema';

export const prescriptionAttachmentUpdateManySchema = z.object({
  data: prescriptionAttachmentUpdateManyMutationInputObjectSchema,
  where: prescriptionAttachmentWhereInputObjectSchema.optional(),
});
