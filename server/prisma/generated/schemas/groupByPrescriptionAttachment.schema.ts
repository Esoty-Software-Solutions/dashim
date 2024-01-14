import { z } from 'zod';
import { PrescriptionAttachmentWhereInputObjectSchema } from './objects/PrescriptionAttachmentWhereInput.schema';
import { PrescriptionAttachmentOrderByWithAggregationInputObjectSchema } from './objects/PrescriptionAttachmentOrderByWithAggregationInput.schema';
import { PrescriptionAttachmentScalarWhereWithAggregatesInputObjectSchema } from './objects/PrescriptionAttachmentScalarWhereWithAggregatesInput.schema';
import { PrescriptionAttachmentScalarFieldEnumSchema } from './enums/PrescriptionAttachmentScalarFieldEnum.schema';

export const PrescriptionAttachmentGroupBySchema = z.object({
  where: PrescriptionAttachmentWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      PrescriptionAttachmentOrderByWithAggregationInputObjectSchema,
      PrescriptionAttachmentOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having:
    PrescriptionAttachmentScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(PrescriptionAttachmentScalarFieldEnumSchema),
});
