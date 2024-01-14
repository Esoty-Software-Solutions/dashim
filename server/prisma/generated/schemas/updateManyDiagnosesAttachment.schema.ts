import { z } from 'zod';
import { DiagnosesAttachmentUpdateManyMutationInputObjectSchema } from './objects/DiagnosesAttachmentUpdateManyMutationInput.schema';
import { DiagnosesAttachmentWhereInputObjectSchema } from './objects/DiagnosesAttachmentWhereInput.schema';

export const DiagnosesAttachmentUpdateManySchema = z.object({
  data: DiagnosesAttachmentUpdateManyMutationInputObjectSchema,
  where: DiagnosesAttachmentWhereInputObjectSchema.optional(),
});
