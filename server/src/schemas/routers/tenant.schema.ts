import { z } from "zod";

import { TenantScalarFieldEnumSchema } from "@schemas/enums/TenantScalarFieldEnum.schema";
import { TenantCreateManyInputObjectSchema } from "@schemas/objects/TenantCreateManyInput.schema";
import { TenantUncheckedCreateInputObjectSchema } from "@schemas/objects/TenantUncheckedCreateInput.schema";
import { TenantWhereInputObjectSchema } from "@schemas/objects/TenantWhereInput.schema";
import { TenantOrderByWithRelationInputObjectSchema } from "@schemas/objects/TenantOrderByWithRelationInput.schema";
import { TenantWhereUniqueInputObjectSchema } from "@schemas/objects/TenantWhereUniqueInput.schema";
import { TenantUncheckedUpdateInputObjectSchema } from "@schemas/objects/TenantUncheckedUpdateInput.schema";
// import { TenantOrderByWithAggregationInputObjectSchema } from "@schemas/objects/TenantOrderByWithAggregationInput.schema"; //
// import { TenantScalarWhereWithAggregatesInputObjectSchema } from "@schemas/objects/TenantScalarWhereWithAggregatesInput.schema"; //
// import { TenantUpdateManyMutationInputObjectSchema } from "@schemas/objects/TenantUpdateManyMutationInput.schema"; //
// import { TenantCountAggregateInputObjectSchema } from "@schemas/objects/TenantCountAggregateInput.schema"; //
// import { TenantMinAggregateInputObjectSchema } from "@schemas/objects/TenantMinAggregateInput.schema"; //
// import { TenantMaxAggregateInputObjectSchema } from "@schemas/objects/TenantMaxAggregateInput.schema"; //

// export const TenantAggregateSchema = z.object({
//   orderBy: z
//     .union([
//       TenantOrderByWithRelationInputObjectSchema,
//       TenantOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: TenantWhereInputObjectSchema.optional(),
//   cursor: TenantWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   _count: z
//     .union([z.literal(true), TenantCountAggregateInputObjectSchema])
//     .optional(),
//   _min: TenantMinAggregateInputObjectSchema.optional(),
//   _max: TenantMaxAggregateInputObjectSchema.optional(),
// });

export const TenantCreateManySchema = z.object({
  data: z.union([
    TenantCreateManyInputObjectSchema,
    z.array(TenantCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});

export const TenantCreateOneSchema = z.object({
  data: TenantUncheckedCreateInputObjectSchema,
});

export const TenantDeleteManySchema = z.object({
  where: TenantWhereInputObjectSchema.optional(),
});

export const TenantDeleteOneSchema = z.object({
  where: TenantWhereUniqueInputObjectSchema.optional(),
});

// export const TenantFindFirstSchema = z.object({
//   orderBy: z
//     .union([
//       TenantOrderByWithRelationInputObjectSchema,
//       TenantOrderByWithRelationInputObjectSchema.array(),
//     ])
//     .optional(),
//   where: TenantWhereInputObjectSchema.optional(),
//   cursor: TenantWhereUniqueInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   distinct: z.array(TenantScalarFieldEnumSchema).optional(),
// });

export const TenantFindManySchema = z
  .object({
    orderBy: z
      .union([
        TenantOrderByWithRelationInputObjectSchema,
        TenantOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: TenantWhereInputObjectSchema.optional(),
    cursor: TenantWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z.array(TenantScalarFieldEnumSchema).optional(),
  })
  .optional();

export const TenantFindUniqueSchema = z.object({
  where: TenantWhereUniqueInputObjectSchema,
});

// export const TenantGroupBySchema = z.object({
//   where: TenantWhereInputObjectSchema.optional(),
//   orderBy: z
//     .union([
//       TenantOrderByWithAggregationInputObjectSchema,
//       TenantOrderByWithAggregationInputObjectSchema.array(),
//     ])
//     .optional(),
//   having: TenantScalarWhereWithAggregatesInputObjectSchema.optional(),
//   take: z.number().optional(),
//   skip: z.number().optional(),
//   by: z.array(TenantScalarFieldEnumSchema),
// });

// export const TenantUpdateManySchema = z.object({
//   data: TenantUpdateManyMutationInputObjectSchema,
//   where: TenantWhereInputObjectSchema.optional(),
// });

export const TenantUpdateOneSchema = z.object({
  data: TenantUncheckedUpdateInputObjectSchema,
  where: TenantWhereUniqueInputObjectSchema,
});

// export const TenantUpsertSchema = z.object({
//   where: TenantWhereUniqueInputObjectSchema,
//   create: TenantUncheckedCreateInputObjectSchema,
//   update: TenantUncheckedCreateInputObjectSchema,
// });

export const TenantCountSchema = z
  .object({
    // orderBy: z
    //   .union([
    //     TenantOrderByWithRelationInputObjectSchema,
    //     TenantOrderByWithRelationInputObjectSchema.array(),
    //   ])
    //   .optional(),
    where: TenantWhereInputObjectSchema.optional(),
    // cursor: TenantWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .optional();
