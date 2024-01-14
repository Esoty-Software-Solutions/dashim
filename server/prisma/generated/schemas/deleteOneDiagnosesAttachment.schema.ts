import { z } from 'zod';
import { DiagnosesAttachmentWhereUniqueInputObjectSchema } from './objects/DiagnosesAttachmentWhereUniqueInput.schema';

export const DiagnosesAttachmentDeleteOneSchema = z.object({
  where: DiagnosesAttachmentWhereUniqueInputObjectSchema,
});
