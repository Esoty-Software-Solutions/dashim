import { z } from 'zod';
import { prescriptionAttachmentOrderByWithRelationInputObjectSchema } from './objects/prescriptionAttachmentOrderByWithRelationInput.schema';
import { prescriptionAttachmentWhereInputObjectSchema } from './objects/prescriptionAttachmentWhereInput.schema';
import { prescriptionAttachmentWhereUniqueInputObjectSchema } from './objects/prescriptionAttachmentWhereUniqueInput.schema';
import { prescriptionAttachmentScalarFieldEnumSchema } from './enums/prescriptionAttachmentScalarFieldEnum.schema';

export const prescriptionAttachmentFindManySchema = z.object({
  orderBy: z
    .union([
      prescriptionAttachmentOrderByWithRelationInputObjectSchema,
      prescriptionAttachmentOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: prescriptionAttachmentWhereInputObjectSchema.optional(),
  cursor: prescriptionAttachmentWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(prescriptionAttachmentScalarFieldEnumSchema).optional(),
});
