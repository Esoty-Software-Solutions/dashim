import { z } from 'zod';
import { DiagnosesAttachmentUpdateInputObjectSchema } from './objects/DiagnosesAttachmentUpdateInput.schema';
import { DiagnosesAttachmentUncheckedUpdateInputObjectSchema } from './objects/DiagnosesAttachmentUncheckedUpdateInput.schema';
import { DiagnosesAttachmentWhereUniqueInputObjectSchema } from './objects/DiagnosesAttachmentWhereUniqueInput.schema';

export const DiagnosesAttachmentUpdateOneSchema = z.object({
  data: z.union([
    DiagnosesAttachmentUpdateInputObjectSchema,
    DiagnosesAttachmentUncheckedUpdateInputObjectSchema,
  ]),
  where: DiagnosesAttachmentWhereUniqueInputObjectSchema,
});
