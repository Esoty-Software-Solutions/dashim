import { z } from "zod";

import { CityEnumScalarFieldEnumSchema } from "@schemas/enums/CityEnumScalarFieldEnum.schema";
import { CityEnumCreateManyInputObjectSchema } from "@schemas/objects/CityEnumCreateManyInput.schema";
import { CityEnumUncheckedCreateInputObjectSchema } from "@schemas/objects/CityEnumUncheckedCreateInput.schema";
import { CityEnumWhereInputObjectSchema } from "@schemas/objects/CityEnumWhereInput.schema";
import { CityEnumOrderByWithRelationInputObjectSchema } from "@schemas/objects/CityEnumOrderByWithRelationInput.schema";
import { CityEnumWhereUniqueInputObjectSchema } from "@schemas/objects/CityEnumWhereUniqueInput.schema";
import { CityEnumUncheckedUpdateInputObjectSchema } from "@schemas/objects/CityEnumUncheckedUpdateInput.schema";
// import { CityEnumOrderByWithAggregationInputObjectSchema } from "@schemas/objects/CityEnumOrderByWithAggregationInput.schema"; //
// import { CityEnumScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/CityEnumScalarWhereWithAggregatesInput.schema"; //
import { CityEnumUpdateManyMutationInputObjectSchema } from "@schemas/objects/CityEnumUpdateManyMutationInput.schema"; //
// import { CityEnumCountAggregateInputObjectSchema } from "@schemas/objects/CityEnumCountAggregateInput.schema"; //
// import { CityEnumMinAggregateInputObjectSchema } from "@schemas/objects/CityEnumMinAggregateInput.schema"; //
// import { CityEnumMaxAggregateInputObjectSchema } from "@schemas/objects/CityEnumMaxAggregateInput.schema"; //

// export const CityEnumAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       CityEnumOrderByWithRelationInputObjectSchema,
//       CityEnumOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: CityEnumWhereInputObjectSchema.optional(),
//   cursor: CityEnumWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), CityEnumCountAggregateInputObjectSchema])
//     .optional(),
//   _min: CityEnumMinAggregateInputObjectSchema.optional(),
//   _max: CityEnumMaxAggregateInputObjectSchema.optional(),
// });

export const CityEnumCreateManySchema = z.object({
  data: z.union([
    CityEnumCreateManyInputObjectSchema,
    z.array(CityEnumCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const CityEnumCreateOneSchema = z.object({
  data: CityEnumUncheckedCreateInputObjectSchema,
});

export const CityEnumDeleteManySchema = z.object({
  where: CityEnumWhereInputObjectSchema.optional(),
});

export const CityEnumDeleteOneSchema = z.object({
  where: CityEnumWhereUniqueInputObjectSchema,
});

export const CityEnumFindFirstSchema = z.object({
  orderBy: z
    .union([
      CityEnumOrderByWithRelationInputObjectSchema,
      CityEnumOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: CityEnumWhereInputObjectSchema.optional(),
  cursor: CityEnumWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(CityEnumScalarFieldEnumSchema).optional(),
});

export const CityEnumFindManySchema = z
  .object({
    orderBy: z
      .union([
        CityEnumOrderByWithRelationInputObjectSchema,
        CityEnumOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: CityEnumWhereInputObjectSchema.optional(),
    cursor: CityEnumWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(CityEnumScalarFieldEnumSchema).optional(),
  })
  .optional();

export const CityEnumFindUniqueSchema = z.object({
  where: CityEnumWhereUniqueInputObjectSchema,
});

// export const CityEnumGroupBySchema = z.object({
//   where: CityEnumWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       CityEnumOrderByWithAggregationInputObjectSchema,
//       CityEnumOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: CityEnumScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(CityEnumScalarFieldEnumSchema),
// });

export const CityEnumUpdateManySchema = z.object({
  data: CityEnumUpdateManyMutationInputObjectSchema,
  where: CityEnumWhereInputObjectSchema.optional(),
});

export const CityEnumUpdateOneSchema = z.object({
  data: CityEnumUncheckedUpdateInputObjectSchema,
  where: CityEnumWhereUniqueInputObjectSchema,
});

// export const CityEnumUpsertSchema = z.object({
//   where: CityEnumWhereUniqueInputObjectSchema,
//   create: CityEnumUncheckedCreateInputObjectSchema,
//   update: CityEnumUncheckedCreateInputObjectSchema,
// });

export const CityEnumCountSchema = z
  .object({
    // orderBy: z
    //   .union([
    //     CityEnumOrderByWithRelationInputObjectSchema,
    //     CityEnumOrderByWithRelationInputObjectSchema.array(),
    //   ])
    //   .optional(),
    where: CityEnumWhereInputObjectSchema.optional(),
    // cursor: CityEnumWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .optional();
