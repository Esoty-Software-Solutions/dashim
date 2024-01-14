import { z } from 'zod';
import { DiagnosisAttachmentUpdateManyMutationInputObjectSchema } from './objects/DiagnosisAttachmentUpdateManyMutationInput.schema';
import { DiagnosisAttachmentWhereInputObjectSchema } from './objects/DiagnosisAttachmentWhereInput.schema';

export const DiagnosisAttachmentUpdateManySchema = z.object({
  data: DiagnosisAttachmentUpdateManyMutationInputObjectSchema,
  where: DiagnosisAttachmentWhereInputObjectSchema.optional(),
});
