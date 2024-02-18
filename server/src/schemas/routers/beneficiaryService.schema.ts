import { z } from "zod";

import { BeneficiaryServiceScalarFieldEnumSchema } from "@schemas/enums/BeneficiaryServiceScalarFieldEnum.schema";
import { BeneficiaryServiceCreateManyInputObjectSchema } from "@schemas/objects/BeneficiaryServiceCreateManyInput.schema";
import { BeneficiaryServiceUncheckedCreateInputObjectSchema } from "@schemas/objects/BeneficiaryServiceUncheckedCreateInput.schema";
import { BeneficiaryServiceWhereInputObjectSchema } from "@schemas/objects/BeneficiaryServiceWhereInput.schema";
import { BeneficiaryServiceOrderByWithRelationInputObjectSchema } from "@schemas/objects/BeneficiaryServiceOrderByWithRelationInput.schema";
import { BeneficiaryServiceWhereUniqueInputObjectSchema } from "@schemas/objects/BeneficiaryServiceWhereUniqueInput.schema";
import { BeneficiaryServiceUncheckedUpdateInputObjectSchema } from "@schemas/objects/BeneficiaryServiceUncheckedUpdateInput.schema";
// import { BeneficiaryServiceOrderByWithAggregationInputObjectSchema } from "@schemas/objects/BeneficiaryServiceOrderByWithAggregationInput.schema"; //
// import { BeneficiaryServiceScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/BeneficiaryServiceScalarWhereWithAggregatesInput.schema"; //
import { BeneficiaryServiceUpdateManyMutationInputObjectSchema } from "@schemas/objects/BeneficiaryServiceUpdateManyMutationInput.schema"; //
// import { BeneficiaryServiceCountAggregateInputObjectSchema } from "@schemas/objects/BeneficiaryServiceCountAggregateInput.schema"; //
// import { BeneficiaryServiceMinAggregateInputObjectSchema } from "@schemas/objects/BeneficiaryServiceMinAggregateInput.schema"; //
// import { BeneficiaryServiceMaxAggregateInputObjectSchema } from "@schemas/objects/BeneficiaryServiceMaxAggregateInput.schema"; //

// export const BeneficiaryServiceAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       BeneficiaryServiceOrderByWithRelationInputObjectSchema,
//       BeneficiaryServiceOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: BeneficiaryServiceWhereInputObjectSchema.optional(),
//   cursor: BeneficiaryServiceWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), BeneficiaryServiceCountAggregateInputObjectSchema])
//     .optional(),
//   _min: BeneficiaryServiceMinAggregateInputObjectSchema.optional(),
//   _max: BeneficiaryServiceMaxAggregateInputObjectSchema.optional(),
// });

export const BeneficiaryServiceCreateManySchema = z.object({
  data: z.union([
    BeneficiaryServiceCreateManyInputObjectSchema,
    z.array(BeneficiaryServiceCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const BeneficiaryServiceCreateOneSchema = z.object({
  data: BeneficiaryServiceUncheckedCreateInputObjectSchema,
});

export const BeneficiaryServiceDeleteManySchema = z.object({
  where: BeneficiaryServiceWhereInputObjectSchema.optional(),
});

export const BeneficiaryServiceDeleteOneSchema = z.object({
  where: BeneficiaryServiceWhereUniqueInputObjectSchema,
});

export const BeneficiaryServiceFindFirstSchema = z.object({
  orderBy: z
    .union([
      BeneficiaryServiceOrderByWithRelationInputObjectSchema,
      BeneficiaryServiceOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: BeneficiaryServiceWhereInputObjectSchema.optional(),
  cursor: BeneficiaryServiceWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(BeneficiaryServiceScalarFieldEnumSchema).optional(),
});

export const BeneficiaryServiceFindManySchema = z
  .object({
    orderBy: z
      .union([
        BeneficiaryServiceOrderByWithRelationInputObjectSchema,
        BeneficiaryServiceOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: BeneficiaryServiceWhereInputObjectSchema.optional(),
    cursor: BeneficiaryServiceWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(BeneficiaryServiceScalarFieldEnumSchema).optional(),
  })
  .optional();

export const BeneficiaryServiceFindUniqueSchema = z.object({
  where: BeneficiaryServiceWhereUniqueInputObjectSchema,
});

// export const BeneficiaryServiceGroupBySchema = z.object({
//   where: BeneficiaryServiceWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       BeneficiaryServiceOrderByWithAggregationInputObjectSchema,
//       BeneficiaryServiceOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: BeneficiaryServiceScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(BeneficiaryServiceScalarFieldEnumSchema),
// });

export const BeneficiaryServiceUpdateManySchema = z.object({
  data: BeneficiaryServiceUpdateManyMutationInputObjectSchema,
  where: BeneficiaryServiceWhereInputObjectSchema.optional(),
});

export const BeneficiaryServiceUpdateOneSchema = z.object({
  data: BeneficiaryServiceUncheckedUpdateInputObjectSchema,
  where: BeneficiaryServiceWhereUniqueInputObjectSchema,
});

// export const BeneficiaryServiceUpsertSchema = z.object({
//   where: BeneficiaryServiceWhereUniqueInputObjectSchema,
//   create: BeneficiaryServiceUncheckedCreateInputObjectSchema,
//   update: BeneficiaryServiceUncheckedCreateInputObjectSchema,
// });

export const BeneficiaryServiceCountSchema = z
  .object({
    // orderBy: z
    //   .union([
    //     BeneficiaryServiceOrderByWithRelationInputObjectSchema,
    //     BeneficiaryServiceOrderByWithRelationInputObjectSchema.array(),
    //   ])
    //   .optional(),
    where: BeneficiaryServiceWhereInputObjectSchema.optional(),
    // cursor: BeneficiaryServiceWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .optional();
