import { z } from 'zod';
import { prescriptionAttachmentWhereInputObjectSchema } from './objects/prescriptionAttachmentWhereInput.schema';

export const prescriptionAttachmentDeleteManySchema = z.object({
  where: prescriptionAttachmentWhereInputObjectSchema.optional(),
});
