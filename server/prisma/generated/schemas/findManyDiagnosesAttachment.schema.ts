import { z } from 'zod';
import { DiagnosesAttachmentOrderByWithRelationInputObjectSchema } from './objects/DiagnosesAttachmentOrderByWithRelationInput.schema';
import { DiagnosesAttachmentWhereInputObjectSchema } from './objects/DiagnosesAttachmentWhereInput.schema';
import { DiagnosesAttachmentWhereUniqueInputObjectSchema } from './objects/DiagnosesAttachmentWhereUniqueInput.schema';
import { DiagnosesAttachmentScalarFieldEnumSchema } from './enums/DiagnosesAttachmentScalarFieldEnum.schema';

export const DiagnosesAttachmentFindManySchema = z.object({
  orderBy: z
    .union([
      DiagnosesAttachmentOrderByWithRelationInputObjectSchema,
      DiagnosesAttachmentOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: DiagnosesAttachmentWhereInputObjectSchema.optional(),
  cursor: DiagnosesAttachmentWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(DiagnosesAttachmentScalarFieldEnumSchema).optional(),
});
