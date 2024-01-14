import { z } from 'zod';
import { DiagnosisAttachmentWhereUniqueInputObjectSchema } from './objects/DiagnosisAttachmentWhereUniqueInput.schema';
import { DiagnosisAttachmentCreateInputObjectSchema } from './objects/DiagnosisAttachmentCreateInput.schema';
import { DiagnosisAttachmentUncheckedCreateInputObjectSchema } from './objects/DiagnosisAttachmentUncheckedCreateInput.schema';
import { DiagnosisAttachmentUpdateInputObjectSchema } from './objects/DiagnosisAttachmentUpdateInput.schema';
import { DiagnosisAttachmentUncheckedUpdateInputObjectSchema } from './objects/DiagnosisAttachmentUncheckedUpdateInput.schema';

export const DiagnosisAttachmentUpsertSchema = z.object({
  where: DiagnosisAttachmentWhereUniqueInputObjectSchema,
  create: z.union([
    DiagnosisAttachmentCreateInputObjectSchema,
    DiagnosisAttachmentUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    DiagnosisAttachmentUpdateInputObjectSchema,
    DiagnosisAttachmentUncheckedUpdateInputObjectSchema,
  ]),
});
