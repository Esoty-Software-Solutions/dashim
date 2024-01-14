import { z } from 'zod';
import { PrescriptionAttachmentWhereInputObjectSchema } from './objects/PrescriptionAttachmentWhereInput.schema';

export const PrescriptionAttachmentDeleteManySchema = z.object({
  where: PrescriptionAttachmentWhereInputObjectSchema.optional(),
});
