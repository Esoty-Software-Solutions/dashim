import { z } from 'zod';
import { DiagnosisAttachmentOrderByWithRelationInputObjectSchema } from './objects/DiagnosisAttachmentOrderByWithRelationInput.schema';
import { DiagnosisAttachmentWhereInputObjectSchema } from './objects/DiagnosisAttachmentWhereInput.schema';
import { DiagnosisAttachmentWhereUniqueInputObjectSchema } from './objects/DiagnosisAttachmentWhereUniqueInput.schema';
import { DiagnosisAttachmentCountAggregateInputObjectSchema } from './objects/DiagnosisAttachmentCountAggregateInput.schema';
import { DiagnosisAttachmentMinAggregateInputObjectSchema } from './objects/DiagnosisAttachmentMinAggregateInput.schema';
import { DiagnosisAttachmentMaxAggregateInputObjectSchema } from './objects/DiagnosisAttachmentMaxAggregateInput.schema';
import { DiagnosisAttachmentAvgAggregateInputObjectSchema } from './objects/DiagnosisAttachmentAvgAggregateInput.schema';
import { DiagnosisAttachmentSumAggregateInputObjectSchema } from './objects/DiagnosisAttachmentSumAggregateInput.schema';

export const DiagnosisAttachmentAggregateSchema = z.object({
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
  _count: z
    .union([
      z.literal(true),
      DiagnosisAttachmentCountAggregateInputObjectSchema,
    ])
    .optional(),
  _min: DiagnosisAttachmentMinAggregateInputObjectSchema.optional(),
  _max: DiagnosisAttachmentMaxAggregateInputObjectSchema.optional(),
  _avg: DiagnosisAttachmentAvgAggregateInputObjectSchema.optional(),
  _sum: DiagnosisAttachmentSumAggregateInputObjectSchema.optional(),
});
