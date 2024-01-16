import { z } from "zod";

import { BeneficiaryScalarFieldEnumSchema } from "@schemas/enums/BeneficiaryScalarFieldEnum.schema";
import { BeneficiaryCreateManyInputObjectSchema } from "@schemas/objects/BeneficiaryCreateManyInput.schema";
import { BeneficiaryUncheckedCreateInputObjectSchema } from "@schemas/objects/BeneficiaryUncheckedCreateInput.schema";
import { BeneficiaryWhereInputObjectSchema } from "@schemas/objects/BeneficiaryWhereInput.schema";
import { BeneficiaryOrderByWithRelationInputObjectSchema } from "@schemas/objects/BeneficiaryOrderByWithRelationInput.schema";
import { BeneficiaryWhereUniqueInputObjectSchema } from "@schemas/objects/BeneficiaryWhereUniqueInput.schema";
import { BeneficiaryUncheckedUpdateInputObjectSchema } from "@schemas/objects/BeneficiaryUncheckedUpdateInput.schema";
// import { BeneficiaryOrderByWithAggregationInputObjectSchema } from "@schemas/objects/BeneficiaryOrderByWithAggregationInput.schema"; //
// import { BeneficiaryScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/BeneficiaryScalarWhereWithAggregatesInput.schema"; //
// import { BeneficiaryUpdateManyMutationInputObjectSchema } from "@schemas/objects/BeneficiaryUpdateManyMutationInput.schema"; //
// import { BeneficiaryCountAggregateInputObjectSchema } from "@schemas/objects/BeneficiaryCountAggregateInput.schema"; //
// import { BeneficiaryMinAggregateInputObjectSchema } from "@schemas/objects/BeneficiaryMinAggregateInput.schema"; //
// import { BeneficiaryMaxAggregateInputObjectSchema } from "@schemas/objects/BeneficiaryMaxAggregateInput.schema"; //

// export const BeneficiaryAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       BeneficiaryOrderByWithRelationInputObjectSchema,
//       BeneficiaryOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: BeneficiaryWhereInputObjectSchema.optional(),
//   cursor: BeneficiaryWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), BeneficiaryCountAggregateInputObjectSchema])
//     .optional(),
//   _min: BeneficiaryMinAggregateInputObjectSchema.optional(),
//   _max: BeneficiaryMaxAggregateInputObjectSchema.optional(),
// });

export const BeneficiaryCreateManySchema = z.object({
  data: z.union([
    BeneficiaryCreateManyInputObjectSchema,
    z.array(BeneficiaryCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const BeneficiaryCreateOneSchema = z.object({
  data: BeneficiaryUncheckedCreateInputObjectSchema,
});

export const BeneficiaryDeleteManySchema = z.object({
  where: BeneficiaryWhereInputObjectSchema.optional(),
});

export const BeneficiaryDeleteOneSchema = z.object({
  where: BeneficiaryWhereUniqueInputObjectSchema.optional(),
});

// export const BeneficiaryFindFirstSchema = z.object({
//   orderBy: z
//     .union([
//       BeneficiaryOrderByWithRelationInputObjectSchema,
//       BeneficiaryOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: BeneficiaryWhereInputObjectSchema.optional(),
//   cursor: BeneficiaryWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   distinct: z.array(BeneficiaryScalarFieldEnumSchema).optional(),
// });

export const BeneficiaryFindManySchema = z
  .object({
    orderBy: z
      .union([
        BeneficiaryOrderByWithRelationInputObjectSchema,
        BeneficiaryOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: BeneficiaryWhereInputObjectSchema.optional(),
    cursor: BeneficiaryWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(BeneficiaryScalarFieldEnumSchema).optional(),
  })
  .optional();

export const BeneficiaryFindUniqueSchema = z.object({
  where: BeneficiaryWhereUniqueInputObjectSchema,
});

// export const BeneficiaryGroupBySchema = z.object({
//   where: BeneficiaryWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       BeneficiaryOrderByWithAggregationInputObjectSchema,
//       BeneficiaryOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: BeneficiaryScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(BeneficiaryScalarFieldEnumSchema),
// });

// export const BeneficiaryUpdateManySchema = z.object({
//   data: BeneficiaryUpdateManyMutationInputObjectSchema,
//   where: BeneficiaryWhereInputObjectSchema.optional(),
// });

export const BeneficiaryUpdateOneSchema = z.object({
  data: BeneficiaryUncheckedUpdateInputObjectSchema,
  where: BeneficiaryWhereUniqueInputObjectSchema,
});

// export const BeneficiaryUpsertSchema = z.object({
//   where: BeneficiaryWhereUniqueInputObjectSchema,
//   create: BeneficiaryUncheckedCreateInputObjectSchema,
//   update: BeneficiaryUncheckedCreateInputObjectSchema,
// });

export const BeneficiaryCountSchema = z
  .object({
    // orderBy: z
    //   .union([
    //     BeneficiaryOrderByWithRelationInputObjectSchema,
    //     BeneficiaryOrderByWithRelationInputObjectSchema.array(),
    //   ])
    //   .optional(),
    where: BeneficiaryWhereInputObjectSchema.optional(),
    // cursor: BeneficiaryWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .optional();
