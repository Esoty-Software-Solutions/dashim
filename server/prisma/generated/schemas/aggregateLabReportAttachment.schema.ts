import { z } from 'zod';
import { LabReportAttachmentOrderByWithRelationInputObjectSchema } from './objects/LabReportAttachmentOrderByWithRelationInput.schema';
import { LabReportAttachmentWhereInputObjectSchema } from './objects/LabReportAttachmentWhereInput.schema';
import { LabReportAttachmentWhereUniqueInputObjectSchema } from './objects/LabReportAttachmentWhereUniqueInput.schema';
import { LabReportAttachmentCountAggregateInputObjectSchema } from './objects/LabReportAttachmentCountAggregateInput.schema';
import { LabReportAttachmentMinAggregateInputObjectSchema } from './objects/LabReportAttachmentMinAggregateInput.schema';
import { LabReportAttachmentMaxAggregateInputObjectSchema } from './objects/LabReportAttachmentMaxAggregateInput.schema';

export const LabReportAttachmentAggregateSchema = z.object({
  orderBy: z
    .union([
      LabReportAttachmentOrderByWithRelationInputObjectSchema,
      LabReportAttachmentOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: LabReportAttachmentWhereInputObjectSchema.optional(),
  cursor: LabReportAttachmentWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([
      z.literal(true),
      LabReportAttachmentCountAggregateInputObjectSchema,
    ])
    .optional(),
  _min: LabReportAttachmentMinAggregateInputObjectSchema.optional(),
  _max: LabReportAttachmentMaxAggregateInputObjectSchema.optional(),
});
