import { z } from 'zod';
import { PrescriptionAttachmentOrderByWithRelationInputObjectSchema } from './objects/PrescriptionAttachmentOrderByWithRelationInput.schema';
import { PrescriptionAttachmentWhereInputObjectSchema } from './objects/PrescriptionAttachmentWhereInput.schema';
import { PrescriptionAttachmentWhereUniqueInputObjectSchema } from './objects/PrescriptionAttachmentWhereUniqueInput.schema';
import { PrescriptionAttachmentCountAggregateInputObjectSchema } from './objects/PrescriptionAttachmentCountAggregateInput.schema';
import { PrescriptionAttachmentMinAggregateInputObjectSchema } from './objects/PrescriptionAttachmentMinAggregateInput.schema';
import { PrescriptionAttachmentMaxAggregateInputObjectSchema } from './objects/PrescriptionAttachmentMaxAggregateInput.schema';

export const PrescriptionAttachmentAggregateSchema = z.object({
  orderBy: z
    .union([
      PrescriptionAttachmentOrderByWithRelationInputObjectSchema,
      PrescriptionAttachmentOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PrescriptionAttachmentWhereInputObjectSchema.optional(),
  cursor: PrescriptionAttachmentWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([
      z.literal(true),
      PrescriptionAttachmentCountAggregateInputObjectSchema,
    ])
    .optional(),
  _min: PrescriptionAttachmentMinAggregateInputObjectSchema.optional(),
  _max: PrescriptionAttachmentMaxAggregateInputObjectSchema.optional(),
});
