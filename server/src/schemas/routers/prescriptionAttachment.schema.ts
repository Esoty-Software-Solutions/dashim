import { z } from "zod";

import { PrescriptionAttachmentScalarFieldEnumSchema } from "@schemas/enums/PrescriptionAttachmentScalarFieldEnum.schema";
import { PrescriptionAttachmentCreateManyInputObjectSchema } from "@schemas/objects/PrescriptionAttachmentCreateManyInput.schema";
import { PrescriptionAttachmentUncheckedCreateInputObjectSchema } from "@schemas/objects/PrescriptionAttachmentUncheckedCreateInput.schema";
import { PrescriptionAttachmentWhereInputObjectSchema } from "@schemas/objects/PrescriptionAttachmentWhereInput.schema";
import { PrescriptionAttachmentOrderByWithRelationInputObjectSchema } from "@schemas/objects/PrescriptionAttachmentOrderByWithRelationInput.schema";
import { PrescriptionAttachmentWhereUniqueInputObjectSchema } from "@schemas/objects/PrescriptionAttachmentWhereUniqueInput.schema";
import { PrescriptionAttachmentUncheckedUpdateInputObjectSchema } from "@schemas/objects/PrescriptionAttachmentUncheckedUpdateInput.schema";
// import { PrescriptionAttachmentOrderByWithAggregationInputObjectSchema } from "@schemas/objects/PrescriptionAttachmentOrderByWithAggregationInput.schema"; //
// import { PrescriptionAttachmentScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/PrescriptionAttachmentScalarWhereWithAggregatesInput.schema"; //
// import { PrescriptionAttachmentUpdateManyMutationInputObjectSchema } from "@schemas/objects/PrescriptionAttachmentUpdateManyMutationInput.schema"; //
// import { PrescriptionAttachmentCountAggregateInputObjectSchema } from "@schemas/objects/PrescriptionAttachmentCountAggregateInput.schema"; //
// import { PrescriptionAttachmentMinAggregateInputObjectSchema } from "@schemas/objects/PrescriptionAttachmentMinAggregateInput.schema"; //
// import { PrescriptionAttachmentMaxAggregateInputObjectSchema } from "@schemas/objects/PrescriptionAttachmentMaxAggregateInput.schema"; //

// export const PrescriptionAttachmentAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       PrescriptionAttachmentOrderByWithRelationInputObjectSchema,
//       PrescriptionAttachmentOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: PrescriptionAttachmentWhereInputObjectSchema.optional(),
//   cursor: PrescriptionAttachmentWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), PrescriptionAttachmentCountAggregateInputObjectSchema])
//     .optional(),
//   _min: PrescriptionAttachmentMinAggregateInputObjectSchema.optional(),
//   _max: PrescriptionAttachmentMaxAggregateInputObjectSchema.optional(),
// });

export const PrescriptionAttachmentCreateManySchema = z.object({
  data: z.union([
    PrescriptionAttachmentCreateManyInputObjectSchema,
    z.array(PrescriptionAttachmentCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const PrescriptionAttachmentCreateOneSchema = z.object({
  data: PrescriptionAttachmentUncheckedCreateInputObjectSchema,
});

export const PrescriptionAttachmentDeleteManySchema = z.object({
  where: PrescriptionAttachmentWhereInputObjectSchema.optional(),
});

export const PrescriptionAttachmentDeleteOneSchema = z.object({
  where: PrescriptionAttachmentWhereUniqueInputObjectSchema.optional(),
});

// export const PrescriptionAttachmentFindFirstSchema = z.object({
//   orderBy: z
//     .union([
//       PrescriptionAttachmentOrderByWithRelationInputObjectSchema,
//       PrescriptionAttachmentOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: PrescriptionAttachmentWhereInputObjectSchema.optional(),
//   cursor: PrescriptionAttachmentWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   distinct: z.array(PrescriptionAttachmentScalarFieldEnumSchema).optional(),
// });

export const PrescriptionAttachmentFindManySchema = z
  .object({
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
  })
  .optional();

export const PrescriptionAttachmentFindUniqueSchema = z.object({
  where: PrescriptionAttachmentWhereUniqueInputObjectSchema,
});

// export const PrescriptionAttachmentGroupBySchema = z.object({
//   where: PrescriptionAttachmentWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       PrescriptionAttachmentOrderByWithAggregationInputObjectSchema,
//       PrescriptionAttachmentOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: PrescriptionAttachmentScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(PrescriptionAttachmentScalarFieldEnumSchema),
// });

// export const PrescriptionAttachmentUpdateManySchema = z.object({
//   data: PrescriptionAttachmentUpdateManyMutationInputObjectSchema,
//   where: PrescriptionAttachmentWhereInputObjectSchema.optional(),
// });

export const PrescriptionAttachmentUpdateOneSchema = z.object({
  data: PrescriptionAttachmentUncheckedUpdateInputObjectSchema,
  where: PrescriptionAttachmentWhereUniqueInputObjectSchema,
});

// export const PrescriptionAttachmentUpsertSchema = z.object({
//   where: PrescriptionAttachmentWhereUniqueInputObjectSchema,
//   create: PrescriptionAttachmentUncheckedCreateInputObjectSchema,
//   update: PrescriptionAttachmentUncheckedCreateInputObjectSchema,
// });

export const PrescriptionAttachmentCountSchema = z
  .object({
    // orderBy: z
    //   .union([
    //     PrescriptionAttachmentOrderByWithRelationInputObjectSchema,
    //     PrescriptionAttachmentOrderByWithRelationInputObjectSchema.array(),
    //   ])
    //   .optional(),
    where: PrescriptionAttachmentWhereInputObjectSchema.optional(),
    // cursor: PrescriptionAttachmentWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .optional();
