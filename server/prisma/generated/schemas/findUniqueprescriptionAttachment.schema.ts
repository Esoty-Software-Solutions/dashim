import { z } from 'zod';
import { PrescriptionAttachmentWhereUniqueInputObjectSchema } from './objects/PrescriptionAttachmentWhereUniqueInput.schema';

export const PrescriptionAttachmentFindUniqueSchema = z.object({
  where: PrescriptionAttachmentWhereUniqueInputObjectSchema,
});
