import { z } from 'zod';
import { LabReportAttachmentWhereInputObjectSchema } from './objects/LabReportAttachmentWhereInput.schema';
import { LabReportAttachmentOrderByWithAggregationInputObjectSchema } from './objects/LabReportAttachmentOrderByWithAggregationInput.schema';
import { LabReportAttachmentScalarWhereWithAggregatesInputObjectSchema } from './objects/LabReportAttachmentScalarWhereWithAggregatesInput.schema';
import { LabReportAttachmentScalarFieldEnumSchema } from './enums/LabReportAttachmentScalarFieldEnum.schema';

export const LabReportAttachmentGroupBySchema = z.object({
  where: LabReportAttachmentWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      LabReportAttachmentOrderByWithAggregationInputObjectSchema,
      LabReportAttachmentOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having:
    LabReportAttachmentScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(LabReportAttachmentScalarFieldEnumSchema),
});
