import { z } from 'zod';
import { PrescriptionAttachmentOrderByWithRelationInputObjectSchema } from './objects/PrescriptionAttachmentOrderByWithRelationInput.schema';
import { PrescriptionAttachmentWhereInputObjectSchema } from './objects/PrescriptionAttachmentWhereInput.schema';
import { PrescriptionAttachmentWhereUniqueInputObjectSchema } from './objects/PrescriptionAttachmentWhereUniqueInput.schema';
import { PrescriptionAttachmentScalarFieldEnumSchema } from './enums/PrescriptionAttachmentScalarFieldEnum.schema';

export const PrescriptionAttachmentFindFirstSchema = z.object({
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
  distinct: z.array(PrescriptionAttachmentScalarFieldEnumSchema).optional(),
});
