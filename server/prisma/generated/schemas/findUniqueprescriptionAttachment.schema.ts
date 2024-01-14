import { z } from 'zod';
import { prescriptionAttachmentWhereUniqueInputObjectSchema } from './objects/prescriptionAttachmentWhereUniqueInput.schema';

export const prescriptionAttachmentFindUniqueSchema = z.object({
  where: prescriptionAttachmentWhereUniqueInputObjectSchema,
});
