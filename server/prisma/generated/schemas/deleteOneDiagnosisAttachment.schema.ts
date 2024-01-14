import { z } from 'zod';
import { DiagnosisAttachmentWhereUniqueInputObjectSchema } from './objects/DiagnosisAttachmentWhereUniqueInput.schema';

export const DiagnosisAttachmentDeleteOneSchema = z.object({
  where: DiagnosisAttachmentWhereUniqueInputObjectSchema,
});
