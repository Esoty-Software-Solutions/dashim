import { z } from 'zod';
import { DiagnosesAttachmentWhereInputObjectSchema } from './objects/DiagnosesAttachmentWhereInput.schema';

export const DiagnosesAttachmentDeleteManySchema = z.object({
  where: DiagnosesAttachmentWhereInputObjectSchema.optional(),
});
