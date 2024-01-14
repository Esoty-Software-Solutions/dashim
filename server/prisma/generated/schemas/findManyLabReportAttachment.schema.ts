import { z } from 'zod';
import { LabReportAttachmentOrderByWithRelationInputObjectSchema } from './objects/LabReportAttachmentOrderByWithRelationInput.schema';
import { LabReportAttachmentWhereInputObjectSchema } from './objects/LabReportAttachmentWhereInput.schema';
import { LabReportAttachmentWhereUniqueInputObjectSchema } from './objects/LabReportAttachmentWhereUniqueInput.schema';
import { LabReportAttachmentScalarFieldEnumSchema } from './enums/LabReportAttachmentScalarFieldEnum.schema';

export const LabReportAttachmentFindManySchema = z.object({
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
  distinct: z.array(LabReportAttachmentScalarFieldEnumSchema).optional(),
});
