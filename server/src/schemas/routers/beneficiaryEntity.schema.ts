import { z } from "zod";

import { BeneficiaryEntityScalarFieldEnumSchema } from "@schemas/enums/BeneficiaryEntityScalarFieldEnum.schema";
import { BeneficiaryEntityCreateManyInputObjectSchema } from "@schemas/objects/BeneficiaryEntityCreateManyInput.schema";
import { BeneficiaryEntityUncheckedCreateInputObjectSchema } from "@schemas/objects/BeneficiaryEntityUncheckedCreateInput.schema";
import { BeneficiaryEntityWhereInputObjectSchema } from "@schemas/objects/BeneficiaryEntityWhereInput.schema";
import { BeneficiaryEntityOrderByWithRelationInputObjectSchema } from "@schemas/objects/BeneficiaryEntityOrderByWithRelationInput.schema";
import { BeneficiaryEntityWhereUniqueInputObjectSchema } from "@schemas/objects/BeneficiaryEntityWhereUniqueInput.schema";
import { BeneficiaryEntityUncheckedUpdateInputObjectSchema } from "@schemas/objects/BeneficiaryEntityUncheckedUpdateInput.schema";
// import { BeneficiaryEntityOrderByWithAggregationInputObjectSchema } from "@schemas/objects/BeneficiaryEntityOrderByWithAggregationInput.schema"; //
// import { BeneficiaryEntityScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/BeneficiaryEntityScalarWhereWithAggregatesInput.schema"; //
import { BeneficiaryEntityUpdateManyMutationInputObjectSchema } from "@schemas/objects/BeneficiaryEntityUpdateManyMutationInput.schema"; //
// import { BeneficiaryEntityCountAggregateInputObjectSchema } from "@schemas/objects/BeneficiaryEntityCountAggregateInput.schema"; //
// import { BeneficiaryEntityMinAggregateInputObjectSchema } from "@schemas/objects/BeneficiaryEntityMinAggregateInput.schema"; //
// import { BeneficiaryEntityMaxAggregateInputObjectSchema } from "@schemas/objects/BeneficiaryEntityMaxAggregateInput.schema"; //

// export const BeneficiaryEntityAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       BeneficiaryEntityOrderByWithRelationInputObjectSchema,
//       BeneficiaryEntityOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: BeneficiaryEntityWhereInputObjectSchema.optional(),
//   cursor: BeneficiaryEntityWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), BeneficiaryEntityCountAggregateInputObjectSchema])
//     .optional(),
//   _min: BeneficiaryEntityMinAggregateInputObjectSchema.optional(),
//   _max: BeneficiaryEntityMaxAggregateInputObjectSchema.optional(),
// });

export const BeneficiaryEntityCreateManySchema = z.object({
  data: z.union([
    BeneficiaryEntityCreateManyInputObjectSchema,
    z.array(BeneficiaryEntityCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const BeneficiaryEntityCreateOneSchema = z.object({
  data: BeneficiaryEntityUncheckedCreateInputObjectSchema,
});

export const BeneficiaryEntityDeleteManySchema = z.object({
  where: BeneficiaryEntityWhereInputObjectSchema.optional(),
});

export const BeneficiaryEntityDeleteOneSchema = z.object({
  where: BeneficiaryEntityWhereUniqueInputObjectSchema,
});

export const BeneficiaryEntityFindFirstSchema = z.object({
  orderBy: z
    .union([
      BeneficiaryEntityOrderByWithRelationInputObjectSchema,
      BeneficiaryEntityOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: BeneficiaryEntityWhereInputObjectSchema.optional(),
  cursor: BeneficiaryEntityWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(BeneficiaryEntityScalarFieldEnumSchema).optional(),
});

export const BeneficiaryEntityFindManySchema = z
  .object({
    orderBy: z
      .union([
        BeneficiaryEntityOrderByWithRelationInputObjectSchema,
        BeneficiaryEntityOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: BeneficiaryEntityWhereInputObjectSchema.optional(),
    cursor: BeneficiaryEntityWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(BeneficiaryEntityScalarFieldEnumSchema).optional(),
  })
  .optional();

export const BeneficiaryEntityFindUniqueSchema = z.object({
  where: BeneficiaryEntityWhereUniqueInputObjectSchema,
});

// export const BeneficiaryEntityGroupBySchema = z.object({
//   where: BeneficiaryEntityWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       BeneficiaryEntityOrderByWithAggregationInputObjectSchema,
//       BeneficiaryEntityOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: BeneficiaryEntityScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(BeneficiaryEntityScalarFieldEnumSchema),
// });

export const BeneficiaryEntityUpdateManySchema = z.object({
  data: BeneficiaryEntityUpdateManyMutationInputObjectSchema,
  where: BeneficiaryEntityWhereInputObjectSchema.optional(),
});

export const BeneficiaryEntityUpdateOneSchema = z.object({
  data: BeneficiaryEntityUncheckedUpdateInputObjectSchema,
  where: BeneficiaryEntityWhereUniqueInputObjectSchema,
});

// export const BeneficiaryEntityUpsertSchema = z.object({
//   where: BeneficiaryEntityWhereUniqueInputObjectSchema,
//   create: BeneficiaryEntityUncheckedCreateInputObjectSchema,
//   update: BeneficiaryEntityUncheckedCreateInputObjectSchema,
// });

export const BeneficiaryEntityCountSchema = z
  .object({
    // orderBy: z
    //   .union([
    //     BeneficiaryEntityOrderByWithRelationInputObjectSchema,
    //     BeneficiaryEntityOrderByWithRelationInputObjectSchema.array(),
    //   ])
    //   .optional(),
    where: BeneficiaryEntityWhereInputObjectSchema.optional(),
    // cursor: BeneficiaryEntityWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .optional();
