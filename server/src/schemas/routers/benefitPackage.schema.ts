import { z } from "zod";

import { BenefitPackageScalarFieldEnumSchema } from "@schemas/enums/BenefitPackageScalarFieldEnum.schema";
import { BenefitPackageCreateManyInputObjectSchema } from "@schemas/objects/BenefitPackageCreateManyInput.schema";
import { BenefitPackageUncheckedCreateInputObjectSchema } from "@schemas/objects/BenefitPackageUncheckedCreateInput.schema";
import { BenefitPackageWhereInputObjectSchema } from "@schemas/objects/BenefitPackageWhereInput.schema";
import { BenefitPackageOrderByWithRelationInputObjectSchema } from "@schemas/objects/BenefitPackageOrderByWithRelationInput.schema";
import { BenefitPackageWhereUniqueInputObjectSchema } from "@schemas/objects/BenefitPackageWhereUniqueInput.schema";
import { BenefitPackageUncheckedUpdateInputObjectSchema } from "@schemas/objects/BenefitPackageUncheckedUpdateInput.schema";
// import { BenefitPackageOrderByWithAggregationInputObjectSchema } from "@schemas/objects/BenefitPackageOrderByWithAggregationInput.schema"; //
// import { BenefitPackageScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/BenefitPackageScalarWhereWithAggregatesInput.schema"; //
// import { BenefitPackageUpdateManyMutationInputObjectSchema } from "@schemas/objects/BenefitPackageUpdateManyMutationInput.schema"; //
// import { BenefitPackageCountAggregateInputObjectSchema } from "@schemas/objects/BenefitPackageCountAggregateInput.schema"; //
// import { BenefitPackageMinAggregateInputObjectSchema } from "@schemas/objects/BenefitPackageMinAggregateInput.schema"; //
// import { BenefitPackageMaxAggregateInputObjectSchema } from "@schemas/objects/BenefitPackageMaxAggregateInput.schema"; //

// export const BenefitPackageAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       BenefitPackageOrderByWithRelationInputObjectSchema,
//       BenefitPackageOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: BenefitPackageWhereInputObjectSchema.optional(),
//   cursor: BenefitPackageWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), BenefitPackageCountAggregateInputObjectSchema])
//     .optional(),
//   _min: BenefitPackageMinAggregateInputObjectSchema.optional(),
//   _max: BenefitPackageMaxAggregateInputObjectSchema.optional(),
// });

export const BenefitPackageCreateManySchema = z.object({
  data: z.union([
    BenefitPackageCreateManyInputObjectSchema,
    z.array(BenefitPackageCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const BenefitPackageCreateOneSchema = z.object({
  data: BenefitPackageUncheckedCreateInputObjectSchema,
});

export const BenefitPackageDeleteManySchema = z.object({
  where: BenefitPackageWhereInputObjectSchema.optional(),
});

export const BenefitPackageDeleteOneSchema = z.object({
  where: BenefitPackageWhereUniqueInputObjectSchema.optional(),
});

// export const BenefitPackageFindFirstSchema = z.object({
//   orderBy: z
//     .union([
//       BenefitPackageOrderByWithRelationInputObjectSchema,
//       BenefitPackageOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: BenefitPackageWhereInputObjectSchema.optional(),
//   cursor: BenefitPackageWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   distinct: z.array(BenefitPackageScalarFieldEnumSchema).optional(),
// });

export const BenefitPackageFindManySchema = z
  .object({
    orderBy: z
      .union([
        BenefitPackageOrderByWithRelationInputObjectSchema,
        BenefitPackageOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: BenefitPackageWhereInputObjectSchema.optional(),
    cursor: BenefitPackageWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(BenefitPackageScalarFieldEnumSchema).optional(),
  })
  .optional();

export const BenefitPackageFindUniqueSchema = z.object({
  where: BenefitPackageWhereUniqueInputObjectSchema,
});

// export const BenefitPackageGroupBySchema = z.object({
//   where: BenefitPackageWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       BenefitPackageOrderByWithAggregationInputObjectSchema,
//       BenefitPackageOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: BenefitPackageScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(BenefitPackageScalarFieldEnumSchema),
// });

// export const BenefitPackageUpdateManySchema = z.object({
//   data: BenefitPackageUpdateManyMutationInputObjectSchema,
//   where: BenefitPackageWhereInputObjectSchema.optional(),
// });

export const BenefitPackageUpdateOneSchema = z.object({
  data: BenefitPackageUncheckedUpdateInputObjectSchema,
  where: BenefitPackageWhereUniqueInputObjectSchema,
});

// export const BenefitPackageUpsertSchema = z.object({
//   where: BenefitPackageWhereUniqueInputObjectSchema,
//   create: BenefitPackageUncheckedCreateInputObjectSchema,
//   update: BenefitPackageUncheckedCreateInputObjectSchema,
// });

export const BenefitPackageCountSchema = z
  .object({
    // orderBy: z
    //   .union([
    //     BenefitPackageOrderByWithRelationInputObjectSchema,
    //     BenefitPackageOrderByWithRelationInputObjectSchema.array(),
    //   ])
    //   .optional(),
    where: BenefitPackageWhereInputObjectSchema.optional(),
    // cursor: BenefitPackageWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .optional();
