import { z } from "zod";

import { BeneficiaryBalanceScalarFieldEnumSchema } from "@schemas/enums/BeneficiaryBalanceScalarFieldEnum.schema";
import { BeneficiaryBalanceCreateManyInputObjectSchema } from "@schemas/objects/BeneficiaryBalanceCreateManyInput.schema";
import { BeneficiaryBalanceUncheckedCreateInputObjectSchema } from "@schemas/objects/BeneficiaryBalanceUncheckedCreateInput.schema";
import { BeneficiaryBalanceWhereInputObjectSchema } from "@schemas/objects/BeneficiaryBalanceWhereInput.schema";
import { BeneficiaryBalanceOrderByWithRelationInputObjectSchema } from "@schemas/objects/BeneficiaryBalanceOrderByWithRelationInput.schema";
import { BeneficiaryBalanceWhereUniqueInputObjectSchema } from "@schemas/objects/BeneficiaryBalanceWhereUniqueInput.schema";
import { BeneficiaryBalanceUncheckedUpdateInputObjectSchema } from "@schemas/objects/BeneficiaryBalanceUncheckedUpdateInput.schema";
// import { BeneficiaryBalanceOrderByWithAggregationInputObjectSchema } from "@schemas/objects/BeneficiaryBalanceOrderByWithAggregationInput.schema"; //
// import { BeneficiaryBalanceScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/BeneficiaryBalanceScalarWhereWithAggregatesInput.schema"; //
// import { BeneficiaryBalanceUpdateManyMutationInputObjectSchema } from "@schemas/objects/BeneficiaryBalanceUpdateManyMutationInput.schema"; //
// import { BeneficiaryBalanceCountAggregateInputObjectSchema } from "@schemas/objects/BeneficiaryBalanceCountAggregateInput.schema"; //
// import { BeneficiaryBalanceMinAggregateInputObjectSchema } from "@schemas/objects/BeneficiaryBalanceMinAggregateInput.schema"; //
// import { BeneficiaryBalanceMaxAggregateInputObjectSchema } from "@schemas/objects/BeneficiaryBalanceMaxAggregateInput.schema"; //

// export const BeneficiaryBalanceAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       BeneficiaryBalanceOrderByWithRelationInputObjectSchema,
//       BeneficiaryBalanceOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: BeneficiaryBalanceWhereInputObjectSchema.optional(),
//   cursor: BeneficiaryBalanceWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), BeneficiaryBalanceCountAggregateInputObjectSchema])
//     .optional(),
//   _min: BeneficiaryBalanceMinAggregateInputObjectSchema.optional(),
//   _max: BeneficiaryBalanceMaxAggregateInputObjectSchema.optional(),
// });

export const BeneficiaryBalanceCreateManySchema = z.object({
  data: z.union([
    BeneficiaryBalanceCreateManyInputObjectSchema,
    z.array(BeneficiaryBalanceCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const BeneficiaryBalanceCreateOneSchema = z.object({
  data: BeneficiaryBalanceUncheckedCreateInputObjectSchema,
});

export const BeneficiaryBalanceDeleteManySchema = z.object({
  where: BeneficiaryBalanceWhereInputObjectSchema.optional(),
});

export const BeneficiaryBalanceDeleteOneSchema = z.object({
  where: BeneficiaryBalanceWhereUniqueInputObjectSchema.optional(),
});

// export const BeneficiaryBalanceFindFirstSchema = z.object({
//   orderBy: z
//     .union([
//       BeneficiaryBalanceOrderByWithRelationInputObjectSchema,
//       BeneficiaryBalanceOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: BeneficiaryBalanceWhereInputObjectSchema.optional(),
//   cursor: BeneficiaryBalanceWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   distinct: z.array(BeneficiaryBalanceScalarFieldEnumSchema).optional(),
// });

export const BeneficiaryBalanceFindManySchema = z
  .object({
    orderBy: z
      .union([
        BeneficiaryBalanceOrderByWithRelationInputObjectSchema,
        BeneficiaryBalanceOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: BeneficiaryBalanceWhereInputObjectSchema.optional(),
    cursor: BeneficiaryBalanceWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(BeneficiaryBalanceScalarFieldEnumSchema).optional(),
  })
  .optional();

export const BeneficiaryBalanceFindUniqueSchema = z.object({
  where: BeneficiaryBalanceWhereUniqueInputObjectSchema,
});

// export const BeneficiaryBalanceGroupBySchema = z.object({
//   where: BeneficiaryBalanceWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       BeneficiaryBalanceOrderByWithAggregationInputObjectSchema,
//       BeneficiaryBalanceOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: BeneficiaryBalanceScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(BeneficiaryBalanceScalarFieldEnumSchema),
// });

// export const BeneficiaryBalanceUpdateManySchema = z.object({
//   data: BeneficiaryBalanceUpdateManyMutationInputObjectSchema,
//   where: BeneficiaryBalanceWhereInputObjectSchema.optional(),
// });

export const BeneficiaryBalanceUpdateOneSchema = z.object({
  data: BeneficiaryBalanceUncheckedUpdateInputObjectSchema,
  where: BeneficiaryBalanceWhereUniqueInputObjectSchema,
});

// export const BeneficiaryBalanceUpsertSchema = z.object({
//   where: BeneficiaryBalanceWhereUniqueInputObjectSchema,
//   create: BeneficiaryBalanceUncheckedCreateInputObjectSchema,
//   update: BeneficiaryBalanceUncheckedCreateInputObjectSchema,
// });

export const BeneficiaryBalanceCountSchema = z
  .object({
    // orderBy: z
    //   .union([
    //     BeneficiaryBalanceOrderByWithRelationInputObjectSchema,
    //     BeneficiaryBalanceOrderByWithRelationInputObjectSchema.array(),
    //   ])
    //   .optional(),
    where: BeneficiaryBalanceWhereInputObjectSchema.optional(),
    // cursor: BeneficiaryBalanceWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .optional();
