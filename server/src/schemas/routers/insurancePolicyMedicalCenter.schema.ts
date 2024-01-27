import { z } from "zod";

import { InsurancePolicyMedicalCenterScalarFieldEnumSchema } from "@schemas/enums/InsurancePolicyMedicalCenterScalarFieldEnum.schema";
import { InsurancePolicyMedicalCenterCreateManyInputObjectSchema } from "@schemas/objects/InsurancePolicyMedicalCenterCreateManyInput.schema";
import { InsurancePolicyMedicalCenterUncheckedCreateInputObjectSchema } from "@schemas/objects/InsurancePolicyMedicalCenterUncheckedCreateInput.schema";
import { InsurancePolicyMedicalCenterWhereInputObjectSchema } from "@schemas/objects/InsurancePolicyMedicalCenterWhereInput.schema";
import { InsurancePolicyMedicalCenterOrderByWithRelationInputObjectSchema } from "@schemas/objects/InsurancePolicyMedicalCenterOrderByWithRelationInput.schema";
import { InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema } from "@schemas/objects/InsurancePolicyMedicalCenterWhereUniqueInput.schema";
import { InsurancePolicyMedicalCenterUncheckedUpdateInputObjectSchema } from "@schemas/objects/InsurancePolicyMedicalCenterUncheckedUpdateInput.schema";
// import { InsurancePolicyMedicalCenterOrderByWithAggregationInputObjectSchema } from "@schemas/objects/InsurancePolicyMedicalCenterOrderByWithAggregationInput.schema"; //
// import { InsurancePolicyMedicalCenterScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/InsurancePolicyMedicalCenterScalarWhereWithAggregatesInput.schema"; //
import { InsurancePolicyMedicalCenterUpdateManyMutationInputObjectSchema } from "@schemas/objects/InsurancePolicyMedicalCenterUpdateManyMutationInput.schema"; //
// import { InsurancePolicyMedicalCenterCountAggregateInputObjectSchema } from "@schemas/objects/InsurancePolicyMedicalCenterCountAggregateInput.schema"; //
// import { InsurancePolicyMedicalCenterMinAggregateInputObjectSchema } from "@schemas/objects/InsurancePolicyMedicalCenterMinAggregateInput.schema"; //
// import { InsurancePolicyMedicalCenterMaxAggregateInputObjectSchema } from "@schemas/objects/InsurancePolicyMedicalCenterMaxAggregateInput.schema"; //

// export const InsurancePolicyMedicalCenterAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       InsurancePolicyMedicalCenterOrderByWithRelationInputObjectSchema,
//       InsurancePolicyMedicalCenterOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: InsurancePolicyMedicalCenterWhereInputObjectSchema.optional(),
//   cursor: InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), InsurancePolicyMedicalCenterCountAggregateInputObjectSchema])
//     .optional(),
//   _min: InsurancePolicyMedicalCenterMinAggregateInputObjectSchema.optional(),
//   _max: InsurancePolicyMedicalCenterMaxAggregateInputObjectSchema.optional(),
// });

export const InsurancePolicyMedicalCenterCreateManySchema = z.object({
  data: z.union([
    InsurancePolicyMedicalCenterCreateManyInputObjectSchema,
    z.array(InsurancePolicyMedicalCenterCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const InsurancePolicyMedicalCenterCreateOneSchema = z.object({
  data: InsurancePolicyMedicalCenterUncheckedCreateInputObjectSchema,
});

export const InsurancePolicyMedicalCenterDeleteManySchema = z.object({
  where: InsurancePolicyMedicalCenterWhereInputObjectSchema.optional(),
});

export const InsurancePolicyMedicalCenterDeleteOneSchema = z.object({
  where: InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema,
});

export const InsurancePolicyMedicalCenterFindFirstSchema = z.object({
  orderBy: z
    .union([
      InsurancePolicyMedicalCenterOrderByWithRelationInputObjectSchema,
      InsurancePolicyMedicalCenterOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: InsurancePolicyMedicalCenterWhereInputObjectSchema.optional(),
  cursor: InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(InsurancePolicyMedicalCenterScalarFieldEnumSchema).optional(),
});

export const InsurancePolicyMedicalCenterFindManySchema = z
  .object({
    orderBy: z
      .union([
        InsurancePolicyMedicalCenterOrderByWithRelationInputObjectSchema,
        InsurancePolicyMedicalCenterOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: InsurancePolicyMedicalCenterWhereInputObjectSchema.optional(),
    cursor: InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(InsurancePolicyMedicalCenterScalarFieldEnumSchema).optional(),
  })
  .optional();

export const InsurancePolicyMedicalCenterFindUniqueSchema = z.object({
  where: InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema,
});

// export const InsurancePolicyMedicalCenterGroupBySchema = z.object({
//   where: InsurancePolicyMedicalCenterWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       InsurancePolicyMedicalCenterOrderByWithAggregationInputObjectSchema,
//       InsurancePolicyMedicalCenterOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: InsurancePolicyMedicalCenterScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(InsurancePolicyMedicalCenterScalarFieldEnumSchema),
// });

export const InsurancePolicyMedicalCenterUpdateManySchema = z.object({
  data: InsurancePolicyMedicalCenterUpdateManyMutationInputObjectSchema,
  where: InsurancePolicyMedicalCenterWhereInputObjectSchema.optional(),
});

export const InsurancePolicyMedicalCenterUpdateOneSchema = z.object({
  data: InsurancePolicyMedicalCenterUncheckedUpdateInputObjectSchema,
  where: InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema,
});

// export const InsurancePolicyMedicalCenterUpsertSchema = z.object({
//   where: InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema,
//   create: InsurancePolicyMedicalCenterUncheckedCreateInputObjectSchema,
//   update: InsurancePolicyMedicalCenterUncheckedCreateInputObjectSchema,
// });

export const InsurancePolicyMedicalCenterCountSchema = z
  .object({
    // orderBy: z
    //   .union([
    //     InsurancePolicyMedicalCenterOrderByWithRelationInputObjectSchema,
    //     InsurancePolicyMedicalCenterOrderByWithRelationInputObjectSchema.array(),
    //   ])
    //   .optional(),
    where: InsurancePolicyMedicalCenterWhereInputObjectSchema.optional(),
    // cursor: InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .optional();
