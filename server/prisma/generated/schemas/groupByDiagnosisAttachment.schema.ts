import { z } from 'zod';
import { DiagnosisAttachmentWhereInputObjectSchema } from './objects/DiagnosisAttachmentWhereInput.schema';
import { DiagnosisAttachmentOrderByWithAggregationInputObjectSchema } from './objects/DiagnosisAttachmentOrderByWithAggregationInput.schema';
import { DiagnosisAttachmentScalarWhereWithAggregatesInputObjectSchema } from './objects/DiagnosisAttachmentScalarWhereWithAggregatesInput.schema';
import { DiagnosisAttachmentScalarFieldEnumSchema } from './enums/DiagnosisAttachmentScalarFieldEnum.schema';

export const DiagnosisAttachmentGroupBySchema = z.object({
  where: DiagnosisAttachmentWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      DiagnosisAttachmentOrderByWithAggregationInputObjectSchema,
      DiagnosisAttachmentOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having:
    DiagnosisAttachmentScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(DiagnosisAttachmentScalarFieldEnumSchema),
});
