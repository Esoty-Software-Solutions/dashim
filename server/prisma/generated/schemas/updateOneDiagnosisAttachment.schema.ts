import { z } from 'zod';
import { DiagnosisAttachmentUpdateInputObjectSchema } from './objects/DiagnosisAttachmentUpdateInput.schema';
import { DiagnosisAttachmentUncheckedUpdateInputObjectSchema } from './objects/DiagnosisAttachmentUncheckedUpdateInput.schema';
import { DiagnosisAttachmentWhereUniqueInputObjectSchema } from './objects/DiagnosisAttachmentWhereUniqueInput.schema';

export const DiagnosisAttachmentUpdateOneSchema = z.object({
  data: z.union([
    DiagnosisAttachmentUpdateInputObjectSchema,
    DiagnosisAttachmentUncheckedUpdateInputObjectSchema,
  ]),
  where: DiagnosisAttachmentWhereUniqueInputObjectSchema,
});
