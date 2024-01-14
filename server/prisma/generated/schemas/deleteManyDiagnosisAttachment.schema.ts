import { z } from 'zod';
import { DiagnosisAttachmentWhereInputObjectSchema } from './objects/DiagnosisAttachmentWhereInput.schema';

export const DiagnosisAttachmentDeleteManySchema = z.object({
  where: DiagnosisAttachmentWhereInputObjectSchema.optional(),
});
