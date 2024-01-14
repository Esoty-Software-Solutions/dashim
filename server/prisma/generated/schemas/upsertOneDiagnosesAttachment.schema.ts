import { z } from 'zod';
import { DiagnosesAttachmentWhereUniqueInputObjectSchema } from './objects/DiagnosesAttachmentWhereUniqueInput.schema';
import { DiagnosesAttachmentCreateInputObjectSchema } from './objects/DiagnosesAttachmentCreateInput.schema';
import { DiagnosesAttachmentUncheckedCreateInputObjectSchema } from './objects/DiagnosesAttachmentUncheckedCreateInput.schema';
import { DiagnosesAttachmentUpdateInputObjectSchema } from './objects/DiagnosesAttachmentUpdateInput.schema';
import { DiagnosesAttachmentUncheckedUpdateInputObjectSchema } from './objects/DiagnosesAttachmentUncheckedUpdateInput.schema';

export const DiagnosesAttachmentUpsertSchema = z.object({
  where: DiagnosesAttachmentWhereUniqueInputObjectSchema,
  create: z.union([
    DiagnosesAttachmentCreateInputObjectSchema,
    DiagnosesAttachmentUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    DiagnosesAttachmentUpdateInputObjectSchema,
    DiagnosesAttachmentUncheckedUpdateInputObjectSchema,
  ]),
});
