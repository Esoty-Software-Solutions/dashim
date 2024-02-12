import { z } from "zod";

import { BeneficiaryEntityFutureStatusChangeScalarFieldEnumSchema } from "@schemas/enums/BeneficiaryEntityFutureStatusChangeScalarFieldEnum.schema";
import { BeneficiaryEntityFutureStatusChangeCreateManyInputObjectSchema } from "@schemas/objects/BeneficiaryEntityFutureStatusChangeCreateManyInput.schema";
import { BeneficiaryEntityFutureStatusChangeUncheckedCreateInputObjectSchema } from "@schemas/objects/BeneficiaryEntityFutureStatusChangeUncheckedCreateInput.schema";
import { BeneficiaryEntityFutureStatusChangeWhereInputObjectSchema } from "@schemas/objects/BeneficiaryEntityFutureStatusChangeWhereInput.schema";
import { BeneficiaryEntityFutureStatusChangeOrderByWithRelationInputObjectSchema } from "@schemas/objects/BeneficiaryEntityFutureStatusChangeOrderByWithRelationInput.schema";
import { BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema } from "@schemas/objects/BeneficiaryEntityFutureStatusChangeWhereUniqueInput.schema";
import { BeneficiaryEntityFutureStatusChangeUncheckedUpdateInputObjectSchema } from "@schemas/objects/BeneficiaryEntityFutureStatusChangeUncheckedUpdateInput.schema";
// import { BeneficiaryEntityFutureStatusChangeOrderByWithAggregationInputObjectSchema } from "@schemas/objects/BeneficiaryEntityFutureStatusChangeOrderByWithAggregationInput.schema"; //
// import { BeneficiaryEntityFutureStatusChangeScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/BeneficiaryEntityFutureStatusChangeScalarWhereWithAggregatesInput.schema"; //
import { BeneficiaryEntityFutureStatusChangeUpdateManyMutationInputObjectSchema } from "@schemas/objects/BeneficiaryEntityFutureStatusChangeUpdateManyMutationInput.schema"; //
// import { BeneficiaryEntityFutureStatusChangeCountAggregateInputObjectSchema } from "@schemas/objects/BeneficiaryEntityFutureStatusChangeCountAggregateInput.schema"; //
// import { BeneficiaryEntityFutureStatusChangeMinAggregateInputObjectSchema } from "@schemas/objects/BeneficiaryEntityFutureStatusChangeMinAggregateInput.schema"; //
// import { BeneficiaryEntityFutureStatusChangeMaxAggregateInputObjectSchema } from "@schemas/objects/BeneficiaryEntityFutureStatusChangeMaxAggregateInput.schema"; //

// export const BeneficiaryEntityFutureStatusChangeAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       BeneficiaryEntityFutureStatusChangeOrderByWithRelationInputObjectSchema,
//       BeneficiaryEntityFutureStatusChangeOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: BeneficiaryEntityFutureStatusChangeWhereInputObjectSchema.optional(),
//   cursor: BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), BeneficiaryEntityFutureStatusChangeCountAggregateInputObjectSchema])
//     .optional(),
//   _min: BeneficiaryEntityFutureStatusChangeMinAggregateInputObjectSchema.optional(),
//   _max: BeneficiaryEntityFutureStatusChangeMaxAggregateInputObjectSchema.optional(),
// });

export const BeneficiaryEntityFutureStatusChangeCreateManySchema = z.object({
  data: z.union([
    BeneficiaryEntityFutureStatusChangeCreateManyInputObjectSchema,
    z.array(BeneficiaryEntityFutureStatusChangeCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const BeneficiaryEntityFutureStatusChangeCreateOneSchema = z.object({
  data: BeneficiaryEntityFutureStatusChangeUncheckedCreateInputObjectSchema,
});

export const BeneficiaryEntityFutureStatusChangeDeleteManySchema = z.object({
  where: BeneficiaryEntityFutureStatusChangeWhereInputObjectSchema.optional(),
});

export const BeneficiaryEntityFutureStatusChangeDeleteOneSchema = z.object({
  where: BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema,
});

export const BeneficiaryEntityFutureStatusChangeFindFirstSchema = z.object({
  orderBy: z
    .union([
      BeneficiaryEntityFutureStatusChangeOrderByWithRelationInputObjectSchema,
      BeneficiaryEntityFutureStatusChangeOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: BeneficiaryEntityFutureStatusChangeWhereInputObjectSchema.optional(),
  cursor: BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(BeneficiaryEntityFutureStatusChangeScalarFieldEnumSchema).optional(),
});

export const BeneficiaryEntityFutureStatusChangeFindManySchema = z
  .object({
    orderBy: z
      .union([
        BeneficiaryEntityFutureStatusChangeOrderByWithRelationInputObjectSchema,
        BeneficiaryEntityFutureStatusChangeOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: BeneficiaryEntityFutureStatusChangeWhereInputObjectSchema.optional(),
    cursor: BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(BeneficiaryEntityFutureStatusChangeScalarFieldEnumSchema).optional(),
  })
  .optional();

export const BeneficiaryEntityFutureStatusChangeFindUniqueSchema = z.object({
  where: BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema,
});

// export const BeneficiaryEntityFutureStatusChangeGroupBySchema = z.object({
//   where: BeneficiaryEntityFutureStatusChangeWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       BeneficiaryEntityFutureStatusChangeOrderByWithAggregationInputObjectSchema,
//       BeneficiaryEntityFutureStatusChangeOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: BeneficiaryEntityFutureStatusChangeScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(BeneficiaryEntityFutureStatusChangeScalarFieldEnumSchema),
// });

export const BeneficiaryEntityFutureStatusChangeUpdateManySchema = z.object({
  data: BeneficiaryEntityFutureStatusChangeUpdateManyMutationInputObjectSchema,
  where: BeneficiaryEntityFutureStatusChangeWhereInputObjectSchema.optional(),
});

export const BeneficiaryEntityFutureStatusChangeUpdateOneSchema = z.object({
  data: BeneficiaryEntityFutureStatusChangeUncheckedUpdateInputObjectSchema,
  where: BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema,
});

// export const BeneficiaryEntityFutureStatusChangeUpsertSchema = z.object({
//   where: BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema,
//   create: BeneficiaryEntityFutureStatusChangeUncheckedCreateInputObjectSchema,
//   update: BeneficiaryEntityFutureStatusChangeUncheckedCreateInputObjectSchema,
// });

export const BeneficiaryEntityFutureStatusChangeCountSchema = z
  .object({
    // orderBy: z
    //   .union([
    //     BeneficiaryEntityFutureStatusChangeOrderByWithRelationInputObjectSchema,
    //     BeneficiaryEntityFutureStatusChangeOrderByWithRelationInputObjectSchema.array(),
    //   ])
    //   .optional(),
    where: BeneficiaryEntityFutureStatusChangeWhereInputObjectSchema.optional(),
    // cursor: BeneficiaryEntityFutureStatusChangeWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .optional();
