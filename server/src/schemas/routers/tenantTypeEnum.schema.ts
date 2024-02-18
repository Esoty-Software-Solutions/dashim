import { z } from "zod";

import { TenantTypeEnumScalarFieldEnumSchema } from "@schemas/enums/TenantTypeEnumScalarFieldEnum.schema";
import { TenantTypeEnumCreateManyInputObjectSchema } from "@schemas/objects/TenantTypeEnumCreateManyInput.schema";
import { TenantTypeEnumUncheckedCreateInputObjectSchema } from "@schemas/objects/TenantTypeEnumUncheckedCreateInput.schema";
import { TenantTypeEnumWhereInputObjectSchema } from "@schemas/objects/TenantTypeEnumWhereInput.schema";
import { TenantTypeEnumOrderByWithRelationInputObjectSchema } from "@schemas/objects/TenantTypeEnumOrderByWithRelationInput.schema";
import { TenantTypeEnumWhereUniqueInputObjectSchema } from "@schemas/objects/TenantTypeEnumWhereUniqueInput.schema";
import { TenantTypeEnumUncheckedUpdateInputObjectSchema } from "@schemas/objects/TenantTypeEnumUncheckedUpdateInput.schema";
// import { TenantTypeEnumOrderByWithAggregationInputObjectSchema } from "@schemas/objects/TenantTypeEnumOrderByWithAggregationInput.schema"; //
// import { TenantTypeEnumScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/TenantTypeEnumScalarWhereWithAggregatesInput.schema"; //
import { TenantTypeEnumUpdateManyMutationInputObjectSchema } from "@schemas/objects/TenantTypeEnumUpdateManyMutationInput.schema"; //
// import { TenantTypeEnumCountAggregateInputObjectSchema } from "@schemas/objects/TenantTypeEnumCountAggregateInput.schema"; //
// import { TenantTypeEnumMinAggregateInputObjectSchema } from "@schemas/objects/TenantTypeEnumMinAggregateInput.schema"; //
// import { TenantTypeEnumMaxAggregateInputObjectSchema } from "@schemas/objects/TenantTypeEnumMaxAggregateInput.schema"; //

// export const TenantTypeEnumAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       TenantTypeEnumOrderByWithRelationInputObjectSchema,
//       TenantTypeEnumOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: TenantTypeEnumWhereInputObjectSchema.optional(),
//   cursor: TenantTypeEnumWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), TenantTypeEnumCountAggregateInputObjectSchema])
//     .optional(),
//   _min: TenantTypeEnumMinAggregateInputObjectSchema.optional(),
//   _max: TenantTypeEnumMaxAggregateInputObjectSchema.optional(),
// });

export const TenantTypeEnumCreateManySchema = z.object({
  data: z.union([
    TenantTypeEnumCreateManyInputObjectSchema,
    z.array(TenantTypeEnumCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const TenantTypeEnumCreateOneSchema = z.object({
  data: TenantTypeEnumUncheckedCreateInputObjectSchema,
});

export const TenantTypeEnumDeleteManySchema = z.object({
  where: TenantTypeEnumWhereInputObjectSchema.optional(),
});

export const TenantTypeEnumDeleteOneSchema = z.object({
  where: TenantTypeEnumWhereUniqueInputObjectSchema,
});

export const TenantTypeEnumFindFirstSchema = z.object({
  orderBy: z
    .union([
      TenantTypeEnumOrderByWithRelationInputObjectSchema,
      TenantTypeEnumOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: TenantTypeEnumWhereInputObjectSchema.optional(),
  cursor: TenantTypeEnumWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(TenantTypeEnumScalarFieldEnumSchema).optional(),
});

export const TenantTypeEnumFindManySchema = z
  .object({
    orderBy: z
      .union([
        TenantTypeEnumOrderByWithRelationInputObjectSchema,
        TenantTypeEnumOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: TenantTypeEnumWhereInputObjectSchema.optional(),
    cursor: TenantTypeEnumWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(TenantTypeEnumScalarFieldEnumSchema).optional(),
  })
  .optional();

export const TenantTypeEnumFindUniqueSchema = z.object({
  where: TenantTypeEnumWhereUniqueInputObjectSchema,
});

// export const TenantTypeEnumGroupBySchema = z.object({
//   where: TenantTypeEnumWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       TenantTypeEnumOrderByWithAggregationInputObjectSchema,
//       TenantTypeEnumOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: TenantTypeEnumScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(TenantTypeEnumScalarFieldEnumSchema),
// });

export const TenantTypeEnumUpdateManySchema = z.object({
  data: TenantTypeEnumUpdateManyMutationInputObjectSchema,
  where: TenantTypeEnumWhereInputObjectSchema.optional(),
});

export const TenantTypeEnumUpdateOneSchema = z.object({
  data: TenantTypeEnumUncheckedUpdateInputObjectSchema,
  where: TenantTypeEnumWhereUniqueInputObjectSchema,
});

// export const TenantTypeEnumUpsertSchema = z.object({
//   where: TenantTypeEnumWhereUniqueInputObjectSchema,
//   create: TenantTypeEnumUncheckedCreateInputObjectSchema,
//   update: TenantTypeEnumUncheckedCreateInputObjectSchema,
// });

export const TenantTypeEnumCountSchema = z
  .object({
    // orderBy: z
    //   .union([
    //     TenantTypeEnumOrderByWithRelationInputObjectSchema,
    //     TenantTypeEnumOrderByWithRelationInputObjectSchema.array(),
    //   ])
    //   .optional(),
    where: TenantTypeEnumWhereInputObjectSchema.optional(),
    // cursor: TenantTypeEnumWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .optional();
