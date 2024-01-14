import { z } from 'zod';
import { PrescriptionAttachmentWhereUniqueInputObjectSchema } from './objects/PrescriptionAttachmentWhereUniqueInput.schema';

export const PrescriptionAttachmentDeleteOneSchema = z.object({
  where: PrescriptionAttachmentWhereUniqueInputObjectSchema,
});
