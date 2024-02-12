import { z } from "zod";

import { BenefitPackageMedicalServiceCategoryScalarFieldEnumSchema } from "@schemas/enums/BenefitPackageMedicalServiceCategoryScalarFieldEnum.schema";
import { BenefitPackageMedicalServiceCategoryCreateManyInputObjectSchema } from "@schemas/objects/BenefitPackageMedicalServiceCategoryCreateManyInput.schema";
import { BenefitPackageMedicalServiceCategoryUncheckedCreateInputObjectSchema } from "@schemas/objects/BenefitPackageMedicalServiceCategoryUncheckedCreateInput.schema";
import { BenefitPackageMedicalServiceCategoryWhereInputObjectSchema } from "@schemas/objects/BenefitPackageMedicalServiceCategoryWhereInput.schema";
import { BenefitPackageMedicalServiceCategoryOrderByWithRelationInputObjectSchema } from "@schemas/objects/BenefitPackageMedicalServiceCategoryOrderByWithRelationInput.schema";
import { BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema } from "@schemas/objects/BenefitPackageMedicalServiceCategoryWhereUniqueInput.schema";
import { BenefitPackageMedicalServiceCategoryUncheckedUpdateInputObjectSchema } from "@schemas/objects/BenefitPackageMedicalServiceCategoryUncheckedUpdateInput.schema";
// import { BenefitPackageMedicalServiceCategoryOrderByWithAggregationInputObjectSchema } from "@schemas/objects/BenefitPackageMedicalServiceCategoryOrderByWithAggregationInput.schema"; //
// import { BenefitPackageMedicalServiceCategoryScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/BenefitPackageMedicalServiceCategoryScalarWhereWithAggregatesInput.schema"; //
import { BenefitPackageMedicalServiceCategoryUpdateManyMutationInputObjectSchema } from "@schemas/objects/BenefitPackageMedicalServiceCategoryUpdateManyMutationInput.schema"; //
// import { BenefitPackageMedicalServiceCategoryCountAggregateInputObjectSchema } from "@schemas/objects/BenefitPackageMedicalServiceCategoryCountAggregateInput.schema"; //
// import { BenefitPackageMedicalServiceCategoryMinAggregateInputObjectSchema } from "@schemas/objects/BenefitPackageMedicalServiceCategoryMinAggregateInput.schema"; //
// import { BenefitPackageMedicalServiceCategoryMaxAggregateInputObjectSchema } from "@schemas/objects/BenefitPackageMedicalServiceCategoryMaxAggregateInput.schema"; //

// export const BenefitPackageMedicalServiceCategoryAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       BenefitPackageMedicalServiceCategoryOrderByWithRelationInputObjectSchema,
//       BenefitPackageMedicalServiceCategoryOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: BenefitPackageMedicalServiceCategoryWhereInputObjectSchema.optional(),
//   cursor: BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), BenefitPackageMedicalServiceCategoryCountAggregateInputObjectSchema])
//     .optional(),
//   _min: BenefitPackageMedicalServiceCategoryMinAggregateInputObjectSchema.optional(),
//   _max: BenefitPackageMedicalServiceCategoryMaxAggregateInputObjectSchema.optional(),
// });

export const BenefitPackageMedicalServiceCategoryCreateManySchema = z.object({
  data: z.union([
    BenefitPackageMedicalServiceCategoryCreateManyInputObjectSchema,
    z.array(BenefitPackageMedicalServiceCategoryCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const BenefitPackageMedicalServiceCategoryCreateOneSchema = z.object({
  data: BenefitPackageMedicalServiceCategoryUncheckedCreateInputObjectSchema,
});

export const BenefitPackageMedicalServiceCategoryDeleteManySchema = z.object({
  where: BenefitPackageMedicalServiceCategoryWhereInputObjectSchema.optional(),
});

export const BenefitPackageMedicalServiceCategoryDeleteOneSchema = z.object({
  where: BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema,
});

export const BenefitPackageMedicalServiceCategoryFindFirstSchema = z.object({
  orderBy: z
    .union([
      BenefitPackageMedicalServiceCategoryOrderByWithRelationInputObjectSchema,
      BenefitPackageMedicalServiceCategoryOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: BenefitPackageMedicalServiceCategoryWhereInputObjectSchema.optional(),
  cursor: BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(BenefitPackageMedicalServiceCategoryScalarFieldEnumSchema).optional(),
});

export const BenefitPackageMedicalServiceCategoryFindManySchema = z
  .object({
    orderBy: z
      .union([
        BenefitPackageMedicalServiceCategoryOrderByWithRelationInputObjectSchema,
        BenefitPackageMedicalServiceCategoryOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: BenefitPackageMedicalServiceCategoryWhereInputObjectSchema.optional(),
    cursor: BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(BenefitPackageMedicalServiceCategoryScalarFieldEnumSchema).optional(),
  })
  .optional();

export const BenefitPackageMedicalServiceCategoryFindUniqueSchema = z.object({
  where: BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema,
});

// export const BenefitPackageMedicalServiceCategoryGroupBySchema = z.object({
//   where: BenefitPackageMedicalServiceCategoryWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       BenefitPackageMedicalServiceCategoryOrderByWithAggregationInputObjectSchema,
//       BenefitPackageMedicalServiceCategoryOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: BenefitPackageMedicalServiceCategoryScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(BenefitPackageMedicalServiceCategoryScalarFieldEnumSchema),
// });

export const BenefitPackageMedicalServiceCategoryUpdateManySchema = z.object({
  data: BenefitPackageMedicalServiceCategoryUpdateManyMutationInputObjectSchema,
  where: BenefitPackageMedicalServiceCategoryWhereInputObjectSchema.optional(),
});

export const BenefitPackageMedicalServiceCategoryUpdateOneSchema = z.object({
  data: BenefitPackageMedicalServiceCategoryUncheckedUpdateInputObjectSchema,
  where: BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema,
});

// export const BenefitPackageMedicalServiceCategoryUpsertSchema = z.object({
//   where: BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema,
//   create: BenefitPackageMedicalServiceCategoryUncheckedCreateInputObjectSchema,
//   update: BenefitPackageMedicalServiceCategoryUncheckedCreateInputObjectSchema,
// });

export const BenefitPackageMedicalServiceCategoryCountSchema = z
  .object({
    // orderBy: z
    //   .union([
    //     BenefitPackageMedicalServiceCategoryOrderByWithRelationInputObjectSchema,
    //     BenefitPackageMedicalServiceCategoryOrderByWithRelationInputObjectSchema.array(),
    //   ])
    //   .optional(),
    where: BenefitPackageMedicalServiceCategoryWhereInputObjectSchema.optional(),
    // cursor: BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .optional();
