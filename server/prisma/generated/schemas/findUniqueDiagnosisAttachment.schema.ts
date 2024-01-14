import { z } from 'zod';
import { DiagnosisAttachmentWhereUniqueInputObjectSchema } from './objects/DiagnosisAttachmentWhereUniqueInput.schema';

export const DiagnosisAttachmentFindUniqueSchema = z.object({
  where: DiagnosisAttachmentWhereUniqueInputObjectSchema,
});
