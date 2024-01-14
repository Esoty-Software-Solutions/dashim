import { z } from 'zod';
import { DiagnosesAttachmentWhereInputObjectSchema } from './objects/DiagnosesAttachmentWhereInput.schema';
import { DiagnosesAttachmentOrderByWithAggregationInputObjectSchema } from './objects/DiagnosesAttachmentOrderByWithAggregationInput.schema';
import { DiagnosesAttachmentScalarWhereWithAggregatesInputObjectSchema } from './objects/DiagnosesAttachmentScalarWhereWithAggregatesInput.schema';
import { DiagnosesAttachmentScalarFieldEnumSchema } from './enums/DiagnosesAttachmentScalarFieldEnum.schema';

export const DiagnosesAttachmentGroupBySchema = z.object({
  where: DiagnosesAttachmentWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      DiagnosesAttachmentOrderByWithAggregationInputObjectSchema,
      DiagnosesAttachmentOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having:
    DiagnosesAttachmentScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(DiagnosesAttachmentScalarFieldEnumSchema),
});
