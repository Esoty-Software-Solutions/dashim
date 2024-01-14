import { z } from 'zod';
import { DiagnosisAttachmentOrderByWithRelationInputObjectSchema } from './objects/DiagnosisAttachmentOrderByWithRelationInput.schema';
import { DiagnosisAttachmentWhereInputObjectSchema } from './objects/DiagnosisAttachmentWhereInput.schema';
import { DiagnosisAttachmentWhereUniqueInputObjectSchema } from './objects/DiagnosisAttachmentWhereUniqueInput.schema';
import { DiagnosisAttachmentScalarFieldEnumSchema } from './enums/DiagnosisAttachmentScalarFieldEnum.schema';

export const DiagnosisAttachmentFindFirstSchema = z.object({
  orderBy: z
    .union([
      DiagnosisAttachmentOrderByWithRelationInputObjectSchema,
      DiagnosisAttachmentOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: DiagnosisAttachmentWhereInputObjectSchema.optional(),
  cursor: DiagnosisAttachmentWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(DiagnosisAttachmentScalarFieldEnumSchema).optional(),
});
