import { z } from 'zod';
import { DiagnosesAttachmentCreateInputObjectSchema } from './objects/DiagnosesAttachmentCreateInput.schema';
import { DiagnosesAttachmentUncheckedCreateInputObjectSchema } from './objects/DiagnosesAttachmentUncheckedCreateInput.schema';

export const DiagnosesAttachmentCreateOneSchema = z.object({
  data: z.union([
    DiagnosesAttachmentCreateInputObjectSchema,
    DiagnosesAttachmentUncheckedCreateInputObjectSchema,
  ]),
});
