import { z } from "zod";

import { BeneficiaryFutureStatusChangeScalarFieldEnumSchema } from "@schemas/enums/BeneficiaryFutureStatusChangeScalarFieldEnum.schema";
import { BeneficiaryFutureStatusChangeCreateManyInputObjectSchema } from "@schemas/objects/BeneficiaryFutureStatusChangeCreateManyInput.schema";
import { BeneficiaryFutureStatusChangeUncheckedCreateInputObjectSchema } from "@schemas/objects/BeneficiaryFutureStatusChangeUncheckedCreateInput.schema";
import { BeneficiaryFutureStatusChangeWhereInputObjectSchema } from "@schemas/objects/BeneficiaryFutureStatusChangeWhereInput.schema";
import { BeneficiaryFutureStatusChangeOrderByWithRelationInputObjectSchema } from "@schemas/objects/BeneficiaryFutureStatusChangeOrderByWithRelationInput.schema";
import { BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema } from "@schemas/objects/BeneficiaryFutureStatusChangeWhereUniqueInput.schema";
import { BeneficiaryFutureStatusChangeUncheckedUpdateInputObjectSchema } from "@schemas/objects/BeneficiaryFutureStatusChangeUncheckedUpdateInput.schema";
// import { BeneficiaryFutureStatusChangeOrderByWithAggregationInputObjectSchema } from "@schemas/objects/BeneficiaryFutureStatusChangeOrderByWithAggregationInput.schema"; //
// import { BeneficiaryFutureStatusChangeScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/BeneficiaryFutureStatusChangeScalarWhereWithAggregatesInput.schema"; //
import { BeneficiaryFutureStatusChangeUpdateManyMutationInputObjectSchema } from "@schemas/objects/BeneficiaryFutureStatusChangeUpdateManyMutationInput.schema"; //
// import { BeneficiaryFutureStatusChangeCountAggregateInputObjectSchema } from "@schemas/objects/BeneficiaryFutureStatusChangeCountAggregateInput.schema"; //
// import { BeneficiaryFutureStatusChangeMinAggregateInputObjectSchema } from "@schemas/objects/BeneficiaryFutureStatusChangeMinAggregateInput.schema"; //
// import { BeneficiaryFutureStatusChangeMaxAggregateInputObjectSchema } from "@schemas/objects/BeneficiaryFutureStatusChangeMaxAggregateInput.schema"; //

// export const BeneficiaryFutureStatusChangeAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       BeneficiaryFutureStatusChangeOrderByWithRelationInputObjectSchema,
//       BeneficiaryFutureStatusChangeOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: BeneficiaryFutureStatusChangeWhereInputObjectSchema.optional(),
//   cursor: BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), BeneficiaryFutureStatusChangeCountAggregateInputObjectSchema])
//     .optional(),
//   _min: BeneficiaryFutureStatusChangeMinAggregateInputObjectSchema.optional(),
//   _max: BeneficiaryFutureStatusChangeMaxAggregateInputObjectSchema.optional(),
// });

export const BeneficiaryFutureStatusChangeCreateManySchema = z.object({
  data: z.union([
    BeneficiaryFutureStatusChangeCreateManyInputObjectSchema,
    z.array(BeneficiaryFutureStatusChangeCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const BeneficiaryFutureStatusChangeCreateOneSchema = z.object({
  data: BeneficiaryFutureStatusChangeUncheckedCreateInputObjectSchema,
});

export const BeneficiaryFutureStatusChangeDeleteManySchema = z.object({
  where: BeneficiaryFutureStatusChangeWhereInputObjectSchema.optional(),
});

export const BeneficiaryFutureStatusChangeDeleteOneSchema = z.object({
  where: BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema,
});

export const BeneficiaryFutureStatusChangeFindFirstSchema = z.object({
  orderBy: z
    .union([
      BeneficiaryFutureStatusChangeOrderByWithRelationInputObjectSchema,
      BeneficiaryFutureStatusChangeOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: BeneficiaryFutureStatusChangeWhereInputObjectSchema.optional(),
  cursor: BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(BeneficiaryFutureStatusChangeScalarFieldEnumSchema).optional(),
});

export const BeneficiaryFutureStatusChangeFindManySchema = z
  .object({
    orderBy: z
      .union([
        BeneficiaryFutureStatusChangeOrderByWithRelationInputObjectSchema,
        BeneficiaryFutureStatusChangeOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: BeneficiaryFutureStatusChangeWhereInputObjectSchema.optional(),
    cursor: BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(BeneficiaryFutureStatusChangeScalarFieldEnumSchema).optional(),
  })
  .optional();

export const BeneficiaryFutureStatusChangeFindUniqueSchema = z.object({
  where: BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema,
});

// export const BeneficiaryFutureStatusChangeGroupBySchema = z.object({
//   where: BeneficiaryFutureStatusChangeWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       BeneficiaryFutureStatusChangeOrderByWithAggregationInputObjectSchema,
//       BeneficiaryFutureStatusChangeOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: BeneficiaryFutureStatusChangeScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(BeneficiaryFutureStatusChangeScalarFieldEnumSchema),
// });

export const BeneficiaryFutureStatusChangeUpdateManySchema = z.object({
  data: BeneficiaryFutureStatusChangeUpdateManyMutationInputObjectSchema,
  where: BeneficiaryFutureStatusChangeWhereInputObjectSchema.optional(),
});

export const BeneficiaryFutureStatusChangeUpdateOneSchema = z.object({
  data: BeneficiaryFutureStatusChangeUncheckedUpdateInputObjectSchema,
  where: BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema,
});

// export const BeneficiaryFutureStatusChangeUpsertSchema = z.object({
//   where: BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema,
//   create: BeneficiaryFutureStatusChangeUncheckedCreateInputObjectSchema,
//   update: BeneficiaryFutureStatusChangeUncheckedCreateInputObjectSchema,
// });

export const BeneficiaryFutureStatusChangeCountSchema = z
  .object({
    // orderBy: z
    //   .union([
    //     BeneficiaryFutureStatusChangeOrderByWithRelationInputObjectSchema,
    //     BeneficiaryFutureStatusChangeOrderByWithRelationInputObjectSchema.array(),
    //   ])
    //   .optional(),
    where: BeneficiaryFutureStatusChangeWhereInputObjectSchema.optional(),
    // cursor: BeneficiaryFutureStatusChangeWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .optional();
