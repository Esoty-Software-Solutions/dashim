import { z } from 'zod';
import { DiagnosisAttachmentCreateInputObjectSchema } from './objects/DiagnosisAttachmentCreateInput.schema';
import { DiagnosisAttachmentUncheckedCreateInputObjectSchema } from './objects/DiagnosisAttachmentUncheckedCreateInput.schema';

export const DiagnosisAttachmentCreateOneSchema = z.object({
  data: z.union([
    DiagnosisAttachmentCreateInputObjectSchema,
    DiagnosisAttachmentUncheckedCreateInputObjectSchema,
  ]),
});
