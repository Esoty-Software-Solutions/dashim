import { z } from 'zod';
import { prescriptionAttachmentWhereUniqueInputObjectSchema } from './objects/prescriptionAttachmentWhereUniqueInput.schema';

export const prescriptionAttachmentDeleteOneSchema = z.object({
  where: prescriptionAttachmentWhereUniqueInputObjectSchema,
});
