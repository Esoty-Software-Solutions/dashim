import { z } from 'zod';
import { DiagnosesAttachmentOrderByWithRelationInputObjectSchema } from './objects/DiagnosesAttachmentOrderByWithRelationInput.schema';
import { DiagnosesAttachmentWhereInputObjectSchema } from './objects/DiagnosesAttachmentWhereInput.schema';
import { DiagnosesAttachmentWhereUniqueInputObjectSchema } from './objects/DiagnosesAttachmentWhereUniqueInput.schema';
import { DiagnosesAttachmentCountAggregateInputObjectSchema } from './objects/DiagnosesAttachmentCountAggregateInput.schema';
import { DiagnosesAttachmentMinAggregateInputObjectSchema } from './objects/DiagnosesAttachmentMinAggregateInput.schema';
import { DiagnosesAttachmentMaxAggregateInputObjectSchema } from './objects/DiagnosesAttachmentMaxAggregateInput.schema';
import { DiagnosesAttachmentAvgAggregateInputObjectSchema } from './objects/DiagnosesAttachmentAvgAggregateInput.schema';
import { DiagnosesAttachmentSumAggregateInputObjectSchema } from './objects/DiagnosesAttachmentSumAggregateInput.schema';

export const DiagnosesAttachmentAggregateSchema = z.object({
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
  _count: z
    .union([
      z.literal(true),
      DiagnosesAttachmentCountAggregateInputObjectSchema,
    ])
    .optional(),
  _min: DiagnosesAttachmentMinAggregateInputObjectSchema.optional(),
  _max: DiagnosesAttachmentMaxAggregateInputObjectSchema.optional(),
  _avg: DiagnosesAttachmentAvgAggregateInputObjectSchema.optional(),
  _sum: DiagnosesAttachmentSumAggregateInputObjectSchema.optional(),
});
