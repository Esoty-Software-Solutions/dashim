import { z } from "zod";

import { InsurancePolicyScalarFieldEnumSchema } from "@schemas/enums/InsurancePolicyScalarFieldEnum.schema";
import { InsurancePolicyCreateManyInputObjectSchema } from "@schemas/objects/InsurancePolicyCreateManyInput.schema";
import { InsurancePolicyUncheckedCreateInputObjectSchema } from "@schemas/objects/InsurancePolicyUncheckedCreateInput.schema";
import { InsurancePolicyWhereInputObjectSchema } from "@schemas/objects/InsurancePolicyWhereInput.schema";
import { InsurancePolicyOrderByWithRelationInputObjectSchema } from "@schemas/objects/InsurancePolicyOrderByWithRelationInput.schema";
import { InsurancePolicyWhereUniqueInputObjectSchema } from "@schemas/objects/InsurancePolicyWhereUniqueInput.schema";
import { InsurancePolicyUncheckedUpdateInputObjectSchema } from "@schemas/objects/InsurancePolicyUncheckedUpdateInput.schema";
// import { InsurancePolicyOrderByWithAggregationInputObjectSchema } from "@schemas/objects/InsurancePolicyOrderByWithAggregationInput.schema"; //
// import { InsurancePolicyScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/InsurancePolicyScalarWhereWithAggregatesInput.schema"; //
// import { InsurancePolicyUpdateManyMutationInputObjectSchema } from "@schemas/objects/InsurancePolicyUpdateManyMutationInput.schema"; //
// import { InsurancePolicyCountAggregateInputObjectSchema } from "@schemas/objects/InsurancePolicyCountAggregateInput.schema"; //
// import { InsurancePolicyMinAggregateInputObjectSchema } from "@schemas/objects/InsurancePolicyMinAggregateInput.schema"; //
// import { InsurancePolicyMaxAggregateInputObjectSchema } from "@schemas/objects/InsurancePolicyMaxAggregateInput.schema"; //

// export const InsurancePolicyAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       InsurancePolicyOrderByWithRelationInputObjectSchema,
//       InsurancePolicyOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: InsurancePolicyWhereInputObjectSchema.optional(),
//   cursor: InsurancePolicyWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), InsurancePolicyCountAggregateInputObjectSchema])
//     .optional(),
//   _min: InsurancePolicyMinAggregateInputObjectSchema.optional(),
//   _max: InsurancePolicyMaxAggregateInputObjectSchema.optional(),
// });

export const InsurancePolicyCreateManySchema = z.object({
  data: z.union([
    InsurancePolicyCreateManyInputObjectSchema,
    z.array(InsurancePolicyCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const InsurancePolicyCreateOneSchema = z.object({
  data: InsurancePolicyUncheckedCreateInputObjectSchema,
});

export const InsurancePolicyDeleteManySchema = z.object({
  where: InsurancePolicyWhereInputObjectSchema.optional(),
});

export const InsurancePolicyDeleteOneSchema = z.object({
  where: InsurancePolicyWhereUniqueInputObjectSchema.optional(),
});

// export const InsurancePolicyFindFirstSchema = z.object({
//   orderBy: z
//     .union([
//       InsurancePolicyOrderByWithRelationInputObjectSchema,
//       InsurancePolicyOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: InsurancePolicyWhereInputObjectSchema.optional(),
//   cursor: InsurancePolicyWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   distinct: z.array(InsurancePolicyScalarFieldEnumSchema).optional(),
// });

export const InsurancePolicyFindManySchema = z.object({
  orderBy: z
    .union([
      InsurancePolicyOrderByWithRelationInputObjectSchema,
      InsurancePolicyOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: InsurancePolicyWhereInputObjectSchema.optional(),
  cursor: InsurancePolicyWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(InsurancePolicyScalarFieldEnumSchema).optional(),
});

export const InsurancePolicyFindUniqueSchema = z.object({
  where: InsurancePolicyWhereUniqueInputObjectSchema,
});

// export const InsurancePolicyGroupBySchema = z.object({
//   where: InsurancePolicyWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       InsurancePolicyOrderByWithAggregationInputObjectSchema,
//       InsurancePolicyOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: InsurancePolicyScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(InsurancePolicyScalarFieldEnumSchema),
// });

// export const InsurancePolicyUpdateManySchema = z.object({
//   data: InsurancePolicyUpdateManyMutationInputObjectSchema,
//   where: InsurancePolicyWhereInputObjectSchema.optional(),
// });

export const InsurancePolicyUpdateOneSchema = z.object({
  data: InsurancePolicyUncheckedUpdateInputObjectSchema,
  where: InsurancePolicyWhereUniqueInputObjectSchema,
});

// export const InsurancePolicyUpsertSchema = z.object({
//   where: InsurancePolicyWhereUniqueInputObjectSchema,
//   create: InsurancePolicyUncheckedCreateInputObjectSchema,
//   update: InsurancePolicyUncheckedCreateInputObjectSchema,
// });

export const InsurancePolicyCountSchema = z.object({
  // orderBy: z
  //   .union([
  //     InsurancePolicyOrderByWithRelationInputObjectSchema,
  //     InsurancePolicyOrderByWithRelationInputObjectSchema.array(),
  //   ])
  //   .optional(),
  where: InsurancePolicyWhereInputObjectSchema.optional(),
  // cursor: InsurancePolicyWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
