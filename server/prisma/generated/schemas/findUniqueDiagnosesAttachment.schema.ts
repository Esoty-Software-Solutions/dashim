import { z } from 'zod';
import { DiagnosesAttachmentWhereUniqueInputObjectSchema } from './objects/DiagnosesAttachmentWhereUniqueInput.schema';

export const DiagnosesAttachmentFindUniqueSchema = z.object({
  where: DiagnosesAttachmentWhereUniqueInputObjectSchema,
});
